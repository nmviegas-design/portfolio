export default function SectionHead({ num, label, title }) {
  return (
    <div className="section__head">
      <div className="section__num">
        <span>{num}</span>
        <span>{label}</span>
      </div>
      <h2 className="section__title">{title}</h2>
    </div>
  );
}
