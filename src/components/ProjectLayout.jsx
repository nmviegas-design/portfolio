import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// ---------- Top nav with breadcrumb + sibling project links ----------
function PNav({ project }) {
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
        <Link to="/" className="brand">
          <span className="dot" />
          <span>Nuno Viegas</span>
          <em>— {project.breadcrumb}</em>
        </Link>
        <div className="nav__menu">
          {project.others.map((o) => (
            <Link key={o.slug} to={`/${o.slug}`} className="nav__link">{o.label}</Link>
          ))}
        </div>
        <Link to="/" className="nav__cta">
          <span>← All work</span>
        </Link>
      </div>
    </nav>
  );
}

// ---------- Hero with title + tagline + cover art ----------
function PHero({ project }) {
  return (
    <header className="wrap p-hero" data-screen-label="Project Hero">
      <div className="p-hero__crumb">
        <span className="tag">Case · {project.year}</span>
        <span className="p-hero__tags">
          {project.tags.map((t) => <span key={t} className="chip">{t}</span>)}
        </span>
      </div>
      <h1 className="p-hero__title">{project.name}</h1>
      <p className="p-hero__tagline">{project.tagline}</p>
      <div className="p-hero__cover">
        <CoverArt swatch={project.swatch} title={project.name} />
      </div>
    </header>
  );
}

function CoverArt({ swatch, title }) {
  return (
    <div
      className="cover"
      style={{
        background: `linear-gradient(135deg, ${swatch} 0%, color-mix(in oklab, ${swatch} 65%, var(--ink)) 100%)`,
      }}
    >
      <div className="cover__label">case study · placeholder · drop real hero image</div>
      <div className="cover__title">{title}</div>
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.18 }}
      >
        <rect x="60" y="60" width="240" height="16" fill="white" rx="3" />
        <rect x="60" y="90" width="160" height="10" fill="white" rx="3" />
        <rect x="60" y="140" width="500" height="320" fill="none" stroke="white" strokeWidth="1.5" rx="6" />
        <rect x="600" y="140" width="520" height="150" fill="none" stroke="white" strokeWidth="1.5" rx="6" />
        <rect x="600" y="310" width="250" height="150" fill="none" stroke="white" strokeWidth="1.5" rx="6" />
        <rect x="870" y="310" width="250" height="150" fill="none" stroke="white" strokeWidth="1.5" rx="6" />
        <circle cx="130" cy="230" r="26" fill="white" opacity="0.4" />
        <rect x="170" y="220" width="240" height="8" fill="white" rx="2" />
        <rect x="170" y="238" width="180" height="6" fill="white" rx="2" />
      </svg>
    </div>
  );
}

// ---------- Overview (4-column grid of facts) ----------
function POverview({ project }) {
  return (
    <section className="wrap p-overview">
      <div className="section__head">
        <div className="section__num">
          <span>§ 01</span>
          <span>Overview</span>
        </div>
        <h2 className="section__title">{project.overviewTitle || <>The <em>shape</em> of the work.</>}</h2>
      </div>
      <div className="overview-grid">
        {project.overview.map((col, i) => (
          <div key={i} className="overview-col">
            <div className="overview-col__label">{col.label}</div>
            <ul className="overview-col__list">
              {col.items.map((x, j) => <li key={j}>{x}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Headline metrics strip ----------
function PMetrics({ project }) {
  if (!project.metrics) return null;
  return (
    <section className="wrap p-metrics-wrap">
      <div className="p-metrics">
        {project.metrics.map((m, i) => (
          <div key={i} className="p-metric">
            <div className="p-metric__v">{m.v}</div>
            <div className="p-metric__k">{m.k}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- A single narrative chapter (text + optional quote / list / visuals) ----------
function PChapter({ chapter, idx }) {
  return (
    <section className="wrap p-chapter" data-screen-label={`Chapter ${idx}`}>
      <div className="p-chapter__head">
        <div className="p-chapter__num">
          <span>§ {String(idx).padStart(2, '0')}</span>
          <span>{chapter.kicker || 'Chapter'}</span>
        </div>
        <h3 className="p-chapter__title">{chapter.title}</h3>
      </div>
      <div className="p-chapter__body">
        {chapter.paragraphs && chapter.paragraphs.map((p, i) => (
          <p key={i} className="p-chapter__p">{p}</p>
        ))}
        {chapter.quote && (
          <blockquote className="p-quote">
            <span className="p-quote__mark">&ldquo;</span>
            <div className="p-quote__text">{chapter.quote.text}</div>
            {chapter.quote.cite && <div className="p-quote__cite">— {chapter.quote.cite}</div>}
          </blockquote>
        )}
        {chapter.list && (
          <ul className="p-chapter__list">
            {chapter.list.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        )}
      </div>
      {chapter.visual && (
        <div className={`p-visual ${chapter.visual.layout || 'wide'}`}>
          {chapter.visual.items.map((v, i) => (
            <div
              key={i}
              className="p-visual__item"
              style={{ background: v.bg || 'var(--paper-2)' }}
            >
              <VisualPlaceholder caption={v.caption} accent={v.accent} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

// Stylised "drop screenshot here" placeholder.
function VisualPlaceholder({ caption, accent }) {
  const a = accent || 'var(--accent)';
  return (
    <>
      <svg
        viewBox="0 0 400 260"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <rect x="20" y="20" width="360" height="24" rx="4" fill="color-mix(in oklab, var(--ink) 8%, transparent)" />
        <circle cx="34" cy="32" r="4" fill={a} />
        <rect x="48" y="28" width="60" height="8" rx="2" fill="color-mix(in oklab, var(--ink) 18%, transparent)" />
        <rect x="20" y="60" width="230" height="120" rx="4" fill="color-mix(in oklab, var(--ink) 6%, transparent)" />
        <rect x="34" y="76" width="110" height="10" rx="2" fill="color-mix(in oklab, var(--ink) 25%, transparent)" />
        <rect x="34" y="92" width="160" height="6" rx="2" fill="color-mix(in oklab, var(--ink) 14%, transparent)" />
        <rect x="34" y="104" width="130" height="6" rx="2" fill="color-mix(in oklab, var(--ink) 14%, transparent)" />
        <rect x="34" y="140" width="60" height="24" rx="4" fill={a} />
        <rect x="260" y="60" width="120" height="55" rx="4" fill="color-mix(in oklab, var(--ink) 6%, transparent)" />
        <rect x="260" y="125" width="120" height="55" rx="4" fill="color-mix(in oklab, var(--ink) 6%, transparent)" />
        <rect x="20" y="194" width="360" height="46" rx="4" fill="color-mix(in oklab, var(--ink) 6%, transparent)" />
      </svg>
      {caption && <div className="p-visual__caption">{caption}</div>}
    </>
  );
}

// ---------- Outcomes block ----------
function PResults({ project }) {
  return (
    <section className="wrap p-results" data-screen-label="Results">
      <div className="section__head">
        <div className="section__num">
          <span>§ {String(project.chapters.length + 2).padStart(2, '0')}</span>
          <span>Outcomes</span>
        </div>
        <h2 className="section__title">What it <em>moved.</em></h2>
      </div>
      <div className="results-grid">
        {project.results.map((r, i) => (
          <div key={i} className="result">
            <div className="result__num">{String(i + 1).padStart(2, '0')}</div>
            <div className="result__text">{r}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- "Other projects" cross-link grid ----------
function POther({ project }) {
  return (
    <section className="wrap p-other">
      <div className="section__head">
        <div className="section__num">
          <span>§ —</span>
          <span>Keep looking</span>
        </div>
        <h2 className="section__title">Other <em>projects.</em></h2>
      </div>
      <div className="other-grid">
        {project.others.map((o) => (
          <Link key={o.slug} to={`/${o.slug}`} className="other-card">
            <div className="other-card__num">{o.num}</div>
            <div className="other-card__title">{o.label}</div>
            <div className="other-card__sub">{o.sub}</div>
            <div className="other-card__cta">See project <span>→</span></div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function PContact() {
  return (
    <section className="wrap contact">
      <div className="contact__inner">
        <h2 className="contact__title">Let&rsquo;s <em>talk.</em></h2>
        <div className="contact__right">
          <p className="contact__lead">Curious how I can support you and your team? I&rsquo;d love to hear what you&rsquo;re working on.</p>
          <div className="contact__links">
            <a href="mailto:nmviegas@me.com" className="contact__link">
              <span>nmviegas@me.com</span>
              <span className="k">Email ↗</span>
            </a>
            <a href="https://www.linkedin.com/in/nunomviegas/" className="contact__link">
              <span>in/nunomviegas</span>
              <span className="k">LinkedIn ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PFooter() {
  return (
    <footer className="foot">
      <div className="wrap foot__inner">
        <div className="foot__left">
          <span>© 2026 Nuno Viegas</span>
          <span>·</span>
          <span>Lisbon, PT</span>
        </div>
        <div className="foot__ver">v0.2 — portfolio redesign</div>
      </div>
    </footer>
  );
}

export default function ProjectLayout({ project }) {
  // Reveal-on-scroll for anything tagged with .reveal.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <PNav project={project} />
      <PHero project={project} />
      <POverview project={project} />
      {project.metrics && <PMetrics project={project} />}
      {project.chapters.map((c, i) => (
        <PChapter key={i} chapter={c} idx={i + 2} />
      ))}
      <PResults project={project} />
      <POther project={project} />
      <PContact />
      <PFooter />
    </>
  );
}
