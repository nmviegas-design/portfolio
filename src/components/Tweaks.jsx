import { useEffect, useState } from 'react';
import { ACCENTS, SERIFS } from '../data/theme.js';

/**
 * Floating "Tweaks" panel — accent / serif / density / theme toggles.
 * Hidden by default; opens via the bottom-right pill or a postMessage from the
 * editor harness.
 */
export default function Tweaks({ cfg, setCfg }) {
  const [open, setOpen] = useState(false);

  // Allow the host (Cowork / parent frame) to toggle the panel via postMessage,
  // matching the original behaviour.
  useEffect(() => {
    const handler = (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') setOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', handler);
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch {}
    return () => window.removeEventListener('message', handler);
  }, []);

  const apply = (patch) => {
    const next = { ...cfg, ...patch };
    setCfg(next);
    try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*'); } catch {}
  };

  return (
    <>
      <button
        type="button"
        className="tweaks-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close tweaks panel' : 'Open tweaks panel'}
      >
        {open ? '×' : 'Tweaks'}
      </button>

      <div className={`tweaks ${open ? 'open' : ''}`} role="dialog" aria-label="Theme tweaks">
        <h4>
          <span>Tweaks</span>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close">×</button>
        </h4>

        <div className="tweaks__group">
          <div className="tweaks__label">Accent</div>
          <div className="tweaks__swatches">
            {Object.entries(ACCENTS).map(([k, v]) => (
              <button
                type="button"
                key={k}
                className={`tweaks__swatch ${cfg.accent === k ? 'active' : ''}`}
                style={{ background: v.accent }}
                title={v.name}
                onClick={() => apply({ accent: k })}
                aria-label={v.name}
              />
            ))}
          </div>
        </div>

        <div className="tweaks__group">
          <div className="tweaks__label">Display serif</div>
          <div className="tweaks__options">
            {Object.entries(SERIFS).map(([k, v]) => (
              <button
                type="button"
                key={k}
                className={`tweaks__opt ${cfg.serif === k ? 'active' : ''}`}
                onClick={() => apply({ serif: k })}
              >{v.name}</button>
            ))}
          </div>
        </div>

        <div className="tweaks__group">
          <div className="tweaks__label">Density</div>
          <div className="tweaks__options">
            {['cozy', 'normal', 'roomy'].map((d) => (
              <button
                type="button"
                key={d}
                className={`tweaks__opt ${cfg.density === d ? 'active' : ''}`}
                onClick={() => apply({ density: d })}
              >{d}</button>
            ))}
          </div>
        </div>

        <div className="tweaks__group">
          <div className="tweaks__label">Theme</div>
          <div className="tweaks__options">
            {['light', 'dark'].map((t) => (
              <button
                type="button"
                key={t}
                className={`tweaks__opt ${cfg.theme === t ? 'active' : ''}`}
                onClick={() => apply({ theme: t })}
              >{t}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
