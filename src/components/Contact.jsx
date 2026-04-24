export default function Contact() {
  return (
    <section id="contact" className="wrap contact" data-screen-label="Contact">
      <div className="contact__inner">
        <h2 className="contact__title">
          Let&rsquo;s <em>talk</em>.
        </h2>
        <div className="contact__right">
          <p className="contact__lead">
            Curious how I can support you and your team? I&rsquo;d love to hear what you&rsquo;re working on — drop a line through any of the channels below.
          </p>
          <div className="contact__links">
            <a href="mailto:nmviegas@me.com" className="contact__link">
              <span>nmviegas@me.com</span>
              <span className="k">Email ↗</span>
            </a>
            <a href="https://www.linkedin.com/in/nunomviegas/" className="contact__link">
              <span>in/nunomviegas</span>
              <span className="k">LinkedIn ↗</span>
            </a>
            <a href="tel:+351935364740" className="contact__link">
              <span>+351 935 364 740</span>
              <span className="k">Phone ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
