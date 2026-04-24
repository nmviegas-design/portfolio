import { useCallback, useEffect, useState } from 'react';
import Nav from '../components/Nav.jsx';
import Hero from '../components/Hero.jsx';
import Highlights from '../components/Highlights.jsx';
import TrustedBy from '../components/TrustedBy.jsx';
import Works from '../components/Works.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import Tweaks from '../components/Tweaks.jsx';
import { applyTheme, loadCfg, saveCfg } from '../data/theme.js';

const SECTION_IDS = ['top', 'highlights', 'trust', 'work', 'words', 'contact'];
// Map underlying section id → which nav link should appear active.
const NAV_MAP = { top: 'top', highlights: 'highlights', trust: 'trust', work: 'work', words: 'words', contact: 'words' };

export default function Home() {
  const [cfg, setCfg] = useState(loadCfg);
  const [active, setActive] = useState('top');

  // Apply theme changes + persist.
  useEffect(() => {
    applyTheme(cfg);
    saveCfg(cfg);
  }, [cfg]);

  // Scroll spy — pick the section whose top has crossed the viewport's
  // 35% threshold; everything above counts as "passed".
  useEffect(() => {
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.35;
      let cur = 'top';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) cur = id;
      }
      setActive(NAV_MAP[cur] || 'top');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const jump = useCallback((id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
  }, []);

  // Reveal-on-scroll for any element tagged with .reveal.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Reset to top whenever the home route mounts.
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Nav active={active} onJump={jump} />
      <Hero onJump={jump} />
      <Highlights />
      <TrustedBy />
      <Works />
      <Testimonials />
      <Contact />
      <Footer />
      <Tweaks cfg={cfg} setCfg={setCfg} />
    </>
  );
}
