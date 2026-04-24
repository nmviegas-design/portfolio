import { useEffect, useState } from 'react';
import SectionHead from './SectionHead.jsx';
import { TESTIMONIALS } from '../data/home.jsx';

export default function Testimonials() {
  const featured = TESTIMONIALS.filter((t) => t.featured);
  const others = TESTIMONIALS.filter((t) => !t.featured);
  const carousel = [...featured, ...others];

  const [idx, setIdx] = useState(0);
  const cur = carousel[idx];

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % carousel.length), 7000);
    return () => clearInterval(t);
  }, [carousel.length]);

  return (
    <section id="words" className="section wrap" data-screen-label="Peer Validation">
      <SectionHead
        num="§ 04"
        label="Peer validation"
        title={<>Words from <em>the</em> room.</>}
      />
      <div className="testi-wrap">
        <div className="testi-feature">
          <span className="mark">&ldquo;</span>
          <div className="testi-feature__body">{cur.body}</div>
          <div className="testi-feature__meta">
            <div>
              <div className="testi-feature__name">{cur.name}</div>
              <div className="testi-feature__role">{cur.role} · {cur.company}</div>
            </div>
            <div className="testi-feature__nav" role="tablist">
              {carousel.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  className={`testi-feature__dot ${i === idx ? 'active' : ''}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="testi-side">
          {others.map((t, i) => (
            <div key={i} className="testi-card">
              <div className="testi-card__body">&ldquo;{t.body}&rdquo;</div>
              <div className="testi-card__meta">
                <div>
                  <div className="testi-card__name">{t.name}</div>
                  <div className="testi-card__role">{t.role} · {t.company}</div>
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.12em' }}>
                  0{i + 2}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
