import SectionHead from './SectionHead.jsx';
import { HIGHLIGHTS } from '../data/home.jsx';

export default function Highlights() {
  return (
    <section id="highlights" className="section wrap" data-screen-label="Highlights">
      <SectionHead
        num="§ 01"
        label="Career highlights"
        title={<>Numbers that <em>moved</em> the needle.</>}
      />
      <div className="highlights">
        {HIGHLIGHTS.map((h, i) => (
          <div
            key={i}
            className={`hi ${h.span === 'wide' ? 'hi--wide' : ''} ${h.span === 'full' ? 'hi--full' : ''}`}
          >
            <div>
              <div className="hi__tag">{h.tag}</div>
            </div>
            <div className="hi__metric">
              {h.metric}
              {h.sup && <span className="sup">{h.sup}</span>}
            </div>
            <div className="hi__text">{h.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
