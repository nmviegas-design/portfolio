// ============ THEME CONFIG ============
// Used by the Tweaks panel and the project pages alike.

export const ACCENTS = {
  terracotta: { name: 'Terracotta', accent: 'oklch(0.58 0.16 42)',  inkAccent: 'oklch(0.32 0.12 42)' },
  forest:     { name: 'Forest',     accent: 'oklch(0.45 0.11 155)', inkAccent: 'oklch(0.28 0.08 155)' },
  electric:   { name: 'Electric',   accent: 'oklch(0.55 0.2 260)',  inkAccent: 'oklch(0.3 0.15 260)' },
  mono:       { name: 'Mono',       accent: 'oklch(0.18 0.015 60)', inkAccent: 'oklch(0.3 0.01 60)' },
  coral:      { name: 'Coral',      accent: 'oklch(0.66 0.18 20)',  inkAccent: 'oklch(0.4 0.14 20)' },
};

export const SERIFS = {
  instrument: { name: 'Instrument', stack: "'Instrument Serif', Georgia, serif" },
  fraunces:   { name: 'Fraunces',   stack: "'Fraunces', Georgia, serif" },
  cormorant:  { name: 'Cormorant',  stack: "'Cormorant Garamond', Georgia, serif" },
};

export const DENSITY = {
  cozy:   'clamp(16px, 3vw, 40px)',
  normal: 'clamp(20px, 4vw, 56px)',
  roomy:  'clamp(28px, 5vw, 80px)',
};

export const DEFAULTS = { accent: 'terracotta', serif: 'instrument', density: 'normal', theme: 'light' };

const LIGHT = {
  '--paper':   'oklch(0.975 0.006 80)',
  '--paper-2': 'oklch(0.955 0.008 80)',
  '--ink':     'oklch(0.18 0.015 60)',
  '--ink-2':   'oklch(0.35 0.012 60)',
  '--ink-3':   'oklch(0.55 0.01 60)',
  '--rule':    'oklch(0.88 0.008 70)',
};

const DARK = {
  '--paper':   'oklch(0.18 0.01 60)',
  '--paper-2': 'oklch(0.22 0.012 60)',
  '--ink':     'oklch(0.96 0.005 80)',
  '--ink-2':   'oklch(0.8 0.008 70)',
  '--ink-3':   'oklch(0.6 0.008 70)',
  '--rule':    'oklch(0.3 0.01 60)',
};

// Apply a config to the document root. Mirrors the inline behaviour of the
// original Babel-in-browser version.
export function applyTheme(cfg) {
  const r = document.documentElement;
  const a = ACCENTS[cfg.accent] || ACCENTS.terracotta;
  const s = SERIFS[cfg.serif] || SERIFS.instrument;
  r.style.setProperty('--accent', a.accent);
  r.style.setProperty('--accent-ink', a.inkAccent);
  r.style.setProperty('--serif', s.stack);
  r.style.setProperty('--pad', DENSITY[cfg.density] || DENSITY.normal);

  const palette = cfg.theme === 'dark' ? DARK : LIGHT;
  for (const [k, v] of Object.entries(palette)) {
    r.style.setProperty(k, v);
  }
}

const STORAGE_KEY = 'nuno-tweaks-v1';

export function loadCfg() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULTS };
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULTS };
  }
}

export function saveCfg(cfg) {
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg)); } catch {}
}
