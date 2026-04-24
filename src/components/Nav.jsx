import { useEffect, useState } from 'react';

const LINKS = [
  ['work', 'Work'],
  ['highlights', 'Highlights'],
  ['trust', 'Trusted by'],
  ['words', 'Peer words'],
];

export default function Nav({ active, onJump }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <a
          href="#top"
          className="brand"
          onClick={(e) => { e.preventDefault(); onJump('top'); }}
        >
          <span className="dot" />
          <span>Nuno Viegas</span>
          <em>— Product Design</em>
        </a>
        <div className="nav__menu">
          {LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav__link ${active === id ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); onJump(id); }}
            >{label}</a>
          ))}
        </div>
        <a
          href="https://www.linkedin.com/in/nunomviegas/"
          target="_blank"
          rel="noreferrer"
          className="nav__cta"
        >
          <span className="ping" />
          <span>Available · Let&rsquo;s talk</span>
        </a>
      </div>
    </nav>
  );
}
