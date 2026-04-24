import { Link } from 'react-router-dom';
import SectionHead from './SectionHead.jsx';
import { WORKS } from '../data/home.jsx';

function WorkThumb({ swatch, title }) {
  return (
    <div
      className="work__thumb-inner"
      style={{
        background: `linear-gradient(135deg, ${swatch} 0%, color-mix(in oklab, ${swatch} 75%, var(--ink)) 100%)`,
        display: 'flex',
        alignItems: 'flex-end',
        padding: 20,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--serif)',
          color: 'color-mix(in oklab, white 90%, transparent)',
          fontSize: 'clamp(28px, 3vw, 44px)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          fontStyle: 'italic',
        }}
      >
        {title}
      </div>
      <div
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          fontFamily: 'var(--mono)',
          fontSize: 10,
          letterSpacing: '0.12em',
          color: 'color-mix(in oklab, white 80%, transparent)',
          textTransform: 'uppercase',
        }}
      >
        case study
      </div>
      {/* Subtle wireframe sketch — placeholder until real screenshots drop in */}
      <svg
        viewBox="0 0 300 220"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.22, pointerEvents: 'none' }}
      >
        <rect x="20" y="20" width="120" height="8" fill="white" rx="2" />
        <rect x="20" y="36" width="80" height="6" fill="white" rx="2" />
        <rect x="160" y="20" width="120" height="90" fill="none" stroke="white" strokeWidth="1" rx="4" />
        <rect x="20" y="60" width="120" height="50" fill="none" stroke="white" strokeWidth="1" rx="4" />
        <circle cx="40" cy="85" r="10" fill="white" opacity="0.5" />
        <rect x="58" y="80" width="70" height="5" fill="white" rx="2" />
        <rect x="58" y="90" width="40" height="4" fill="white" rx="2" />
      </svg>
    </div>
  );
}

export default function Works() {
  const total = String(WORKS.length).padStart(2, '0');
  return (
    <section id="work" className="section wrap" data-screen-label="Selected Works">
      <SectionHead
        num="§ 03"
        label="Selected works"
        title={<>A small set of <em>big</em> bets.</>}
      />
      <div className="works">
        {WORKS.map((w) => (
          <Link key={w.num} className="work" to={`/${w.slug}`}>
            <div className="work__num">{w.num} <span style={{ color: 'var(--ink-3)' }}>/ {total}</span></div>
            <div className="work__title-wrap">
              <h3 className="work__title">
                {w.title}
                <em>{w.sub}</em>
              </h3>
              <div className="work__tags">
                {w.tags.map((t) => <span key={t} className="work__tag">{t}</span>)}
              </div>
              <div className="work__see">See project <span>→</span></div>
            </div>
            <p className="work__desc">{w.desc}</p>
            <div className="work__thumb">
              <WorkThumb swatch={w.swatch} title={w.title} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
