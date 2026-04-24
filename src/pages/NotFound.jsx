import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="wrap" style={{ padding: '160px 0 120px', minHeight: '70vh' }}>
      <span className="tag">404 · not found</span>
      <h1 className="hero__headline" style={{ marginTop: 24 }}>
        Wrong <em>turn.</em>
      </h1>
      <p className="hero__sub" style={{ marginTop: 24 }}>
        That page doesn&rsquo;t exist. Head back to the work.
      </p>
      <p style={{ marginTop: 32 }}>
        <Link to="/" className="hero__cta">
          <span>← All work</span>
        </Link>
      </p>
    </main>
  );
}
