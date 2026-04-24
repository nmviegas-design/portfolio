export default function Hero({ onJump }) {
  return (
    <header id="top" className="wrap hero" data-screen-label="Hero">
      <div>
        <div className="hero__top">
          <div className="hero__meta">
            <span className="tag">Portfolio · v2 · 2026</span>
            <h1 className="hero__headline">
              Design that <em>moves</em><br />
              <span className="slash">the</span> business<span className="slash">.</span>
            </h1>
            <p className="hero__sub" style={{ marginTop: 28 }}>
              Hi, I&rsquo;m Nuno — a hands-on Lead Product Designer who blends strategy, empathy, and craft. I work with companies globally to understand their users, define what matters, and ship products that deliver real, measurable results.
            </p>
          </div>
          <div className="hero__avatar" aria-hidden="true">
            <svg className="placeholder" viewBox="0 0 200 250" preserveAspectRatio="none">
              <defs>
                <pattern id="stripes" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <rect width="8" height="8" fill="var(--paper-2)" />
                  <line x1="0" y1="0" x2="0" y2="8" stroke="var(--rule)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="200" height="250" fill="url(#stripes)" />
              <circle cx="100" cy="95" r="32" fill="var(--rule)" />
              <path d="M 40 250 Q 100 160 160 250 Z" fill="var(--rule)" />
            </svg>
            <span className="avatar-label">portrait · drop image</span>
          </div>
        </div>
      </div>

      <div className="hero__bottom">
        <a
          className="hero__cta"
          href="#work"
          onClick={(e) => { e.preventDefault(); onJump('work'); }}
        >
          <span>See selected works</span>
          <span className="arrow">↓</span>
        </a>
        <div className="stat">
          <span className="stat__k">Experience</span>
          <span className="stat__v"><em>15</em>yrs</span>
        </div>
        <div className="stat">
          <span className="stat__k">Based in</span>
          <span className="stat__v">Lisbon</span>
        </div>
        <div className="stat">
          <span className="stat__k">Current</span>
          <span className="stat__v">AXA</span>
        </div>
      </div>
    </header>
  );
}
