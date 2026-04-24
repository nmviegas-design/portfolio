import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProjectLayout from '../components/ProjectLayout.jsx';
import Tweaks from '../components/Tweaks.jsx';
import { PROJECTS } from '../data/projects.jsx';
import { applyTheme, loadCfg, saveCfg } from '../data/theme.js';

export default function Project() {
  const { slug } = useParams();
  const project = PROJECTS[slug];

  const [cfg, setCfg] = useState(loadCfg);

  useEffect(() => {
    applyTheme(cfg);
    saveCfg(cfg);
  }, [cfg]);

  // Reset scroll on slug change so navigating between case studies feels right.
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  // Update document title per case study for share / tab clarity.
  useEffect(() => {
    if (project) {
      document.title = `${project.breadcrumb} — Nuno Viegas`;
    }
    return () => { document.title = 'Nuno Viegas — Lead Product Designer'; };
  }, [project]);

  if (!project) {
    return (
      <main className="wrap" style={{ padding: '160px 0 120px', minHeight: '70vh' }}>
        <span className="tag">Not found · 404</span>
        <h1 className="hero__headline" style={{ marginTop: 24 }}>
          That case <em>doesn&rsquo;t</em> exist.
        </h1>
        <p className="hero__sub" style={{ marginTop: 24 }}>
          The slug <code style={{ fontFamily: 'var(--mono)' }}>/{slug}</code> isn&rsquo;t one of the case studies. Head back to all work.
        </p>
        <p style={{ marginTop: 32 }}>
          <Link to="/" className="hero__cta">
            <span>← All work</span>
          </Link>
        </p>
      </main>
    );
  }

  return (
    <>
      <ProjectLayout project={project} />
      <Tweaks cfg={cfg} setCfg={setCfg} />
    </>
  );
}
