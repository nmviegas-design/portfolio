import SectionHead from './SectionHead.jsx';
import { BRANDS } from '../data/home.jsx';

export default function TrustedBy() {
  // Duplicate the list so the marquee animation can loop seamlessly.
  const items = [...BRANDS, ...BRANDS];
  return (
    <section id="trust" className="marquee-section" data-screen-label="Trusted by">
      <div className="wrap">
        <SectionHead
          num="§ 02"
          label="Trusted by"
          title={<>Shipped with <em>global</em> teams.</>}
        />
      </div>
      <div className="marquee">
        <div className="marquee__track">
          {items.map((b, i) => (
            <div key={i} className="marquee__item">{b}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
