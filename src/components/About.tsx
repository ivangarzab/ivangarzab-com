export default function About() {
  return (
    <section id="about">
      <div className="section-label">About</div>
      <div className="about-grid">
        <div>
          <p className="about-text">
            Senior Software Engineer based in San Francisco, specializing in
            native Android SDKs, Jetpack Compose, and Kotlin — with a decade
            of building software that scales from a handful of users to 50
            million of them.
          </p>
          <p className="about-text" style={{ marginTop: "20px" }}>
            By night and on weekends, a graduate student at SFSU — 
            pursuing an M.A. in Philosophy with a certificate in Ethical AI. I
            believe good architecture and good arguments share more
            structure than most people notice.
          </p>
          <p className="about-text" style={{ marginTop: "20px" }}>
            Bilingual in English and Spanish. Amateur salsa maker.
            Passionate fútbol fan. Avid reader. Enthusiast of things that
            take time to get right.
          </p>
        </div>
        <div>
          <div className="aside-item">
            <div className="aside-label">Based in</div>
            <div className="aside-value">San Francisco, CA</div>
          </div>
          <div className="aside-item">
            <div className="aside-label">Currently</div>
            <div className="aside-value">
              Senior Software Engineer @ Turo
              <br />
              M.A. Philosophy @ SFSU
            </div>
          </div>
          <div className="aside-item">
            <div className="aside-label">Expertise</div>
            <div className="aside-value">
              Android SDK · Kotlin · Jetpack Compose
              <br />
              KMP · Software Architecture · CI/CD
            </div>
          </div>
          <div className="aside-item">
            <div className="aside-label">Reading</div>
            <div className="aside-value">
              Stoicism · Virtue Ethics  · Existentialism
              <br />
              Ethical AI · Mexican Philosophy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
