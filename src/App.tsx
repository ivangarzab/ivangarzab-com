import "./index.css";

// ── TYPES ──────────────────────────────────────────────────────────────────

interface WritingEntry {
  title: string;
  url: string;
  source: string;
  year: string;
  featured: boolean;
  paid: boolean;
}

interface Project {
  number: string;
  name: string;
  desc: string;
  tags: string[];
  url: string;
  urlLabel: string;
}

interface Experience {
  company: string;
  role: string;
  detail?: string;
  location?: string;
  period: string;
  current?: boolean;
}

// ── DATA ───────────────────────────────────────────────────────────────────
// TODO: Claude Code — move these to public/data/*.json and fetch() them

const writing: WritingEntry[] = [
  {
    title: "bark: A Lightweight Logging Library for Android",
    url: "https://medium.com/gitconnected/bark-a-lightweight-logging-library-for-android-14583711bc04",
    source: "Medium",
    year: "2024",
    featured: true,
    paid: false,
  },
  {
    title: "An Inquiry into Publishing a KMP Library to Maven Central",
    url: "https://medium.com/gitconnected/an-inquiry-into-publishing-a-kmp-library-to-maven-central-8351bd5e50dc",
    source: "Medium",
    year: "2024",
    featured: true,
    paid: true,
  },
  {
    title: "Publish a Public Android Library using JitPack",
    url: "https://medium.com/gitconnected/publishing-a-public-android-library-using-jitpack-20843eb2dfc3",
    source: "Medium",
    year: "2024",
    featured: true,
    paid: true,
  },
  {
    title: "An Inquiry into Creating & Hosting a Discord Bot",
    url: "https://medium.com/gitconnected/an-inquiry-into-creating-hosting-a-discord-bot-631b24fdda73",
    source: "Medium",
    year: "2023",
    featured: false,
    paid: true,
  },
  {
    title: "An Inquiry into the Android WebView for Jetpack Compose",
    url: "https://medium.com/gitconnected/an-inquiry-into-the-android-webview-for-jetpack-compose-35cb52e29622",
    source: "Medium",
    year: "2023",
    featured: false,
    paid: true,
  },
  {
    title: "An Inquiry into Android Material 3's PullToRefreshBox",
    url: "https://medium.com/gitconnected/an-inquiry-into-android-material-3s-pulltorefreshbox-ffdb9656d239",
    source: "Medium",
    year: "2024",
    featured: false,
    paid: true,
  },
  {
    title: "Inquiry into Android SplashScreen API [2023]",
    url: "https://medium.com/proandroiddev/inquiry-into-the-android-splashscreen-api-2023-e955946573b1",
    source: "Medium",
    year: "2023",
    featured: false,
    paid: true,
  },
  {
    title: "An Inquiry into Android's App Links",
    url: "https://medium.com/gitconnected/an-inquiry-into-androids-app-links-2d6918666c9e",
    source: "Medium",
    year: "2023",
    featured: false,
    paid: true,
  },
  {
    title: "An Inquiry into Android's In-App Reviews",
    url: "https://medium.com/proandroiddev/an-inquiry-into-androids-in-app-reviews-3a10083eec1a",
    source: "Medium",
    year: "2023",
    featured: false,
    paid: false,
  },
  {
    title: "An Inquiry into Android's Internal App Sharing",
    url: "https://medium.com/gitconnected/an-inquiry-into-androids-internal-app-sharing-a9ad2b9ae2a3",
    source: "Medium",
    year: "2023",
    featured: false,
    paid: false,
  },
  {
    title: "Introducing the Animated Vector Drawable (AVD) for Android",
    url: "https://medium.com/geekculture/introduction-to-animated-vector-drawable-avd-for-android-8db301ad0776",
    source: "Medium",
    year: "2022",
    featured: false,
    paid: false,
  },
  {
    title: "Introducing the Kotlin Playground",
    url: "https://medium.com/proandroiddev/introducing-the-kotlin-playground-e3625c05a109",
    source: "Medium",
    year: "2022",
    featured: false,
    paid: false,
  },
  {
    title: "Setting up Firebase Crashlytics NDK",
    url: "https://medium.com/proandroiddev/setting-up-firebase-crashlytics-ndk-a7770a447d5f",
    source: "Medium",
    year: "2022",
    featured: false,
    paid: false,
  },
];

const projects: Project[] = [
  {
    number: "01",
    name: "Kluvs",
    desc: "Full-stack book club management — frontend, RESTful API, and a Python Discord bot with a Socratic AI discussion engine.",
    tags: ["Python", "React", "TypeScript", "Supabase"],
    url: "https://github.com/ivangarzab/bookclub-frontend",
    urlLabel: "View on GitHub →",
  },
  {
    number: "02",
    name: "Carrus",
    desc: "Solo Android car management app — fully Compose, Material 3, dark mode, 70%+ unit test coverage with JUnit and MockK.",
    tags: ["Kotlin", "Compose", "Material 3", "Maestro"],
    url: "https://play.google.com/store/apps/details?id=com.ivangarzab.carrus",
    urlLabel: "Play Store →",
  },
  {
    number: "03",
    name: "barK",
    desc: "Open-source Kotlin Multiplatform logging library. Lightweight, opinionated, built for the community.",
    tags: ["Kotlin", "KMP", "Open Source"],
    url: "https://github.com/ivangarzab/barK",
    urlLabel: "View on GitHub →",
  },
];

const experience: Experience[] = [
  {
    company: "Turo",
    role: "Senior Software Engineer, Android — Risk & Protection",
    location: "San Francisco, California",
    period: "2025 — present",
    current: true,
  },
  {
    company: "ComplyCo.",
    role: "Senior Android Engineer",
    detail:
      "Built a native Android SDK for compliance UI/UX tracking — view hierarchy analysis, snapshot capture on every screen change, secure upload pipeline. Kotlin multi-module, JNI/NDK, Retrofit + OkHttp.",
    period: "Jun – Aug 2025",
  },
  {
    company: "Mixhalo",
    role: "Senior Android Engineer (Lead)",
    detail:
      "Led Android team end-to-end — zero to 60k+ live event users. Private SDK integrated by the NFL, NBA, MLB, and NASCAR. 75%+ test coverage, 60% faster CI/CD, JNI/NDK audio engine under 500ms latency.",
    period: "2019 — 2025",
  },
  {
    company: "Smule",
    role: "Android Engineer",
    detail:
      "Discoverability and UX for 50M monthly active users. Led the main flow redesign and helped transition the entire Android team to Kotlin.",
    period: "2018 — 2019",
  },
];

// ── APP ────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          ivangarzab
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#writing">Writing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="page">
        {/* ── HERO ── */}
        <div className="hero">
          <div className="hero-eyebrow">
            Senior Software Engineer · M.A. Philosophy
          </div>
          <h1 className="hero-name">
            <em>Iván</em>
            <br />
            <span className="surname">Garza Bermea</span>
          </h1>
          <p className="hero-tagline">
            I build things that run on machines
            <br />
            and think about things that don't.
          </p>
          <div className="hero-links">
            <a
              href="https://github.com/ivangarzab"
              className="hero-link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span className="hero-divider">/</span>
            <a
              href="https://linkedin.com/in/ivangarzab"
              className="hero-link"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <span className="hero-divider">/</span>
            <a
              href="https://medium.ivangarzab.com"
              className="hero-link"
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>
            <span className="hero-divider">/</span>
            <a
              href="https://goodreads.com/ivangarzab"
              className="hero-link"
              target="_blank"
              rel="noreferrer"
            >
              Goodreads
            </a>
            <span className="hero-divider">/</span>
            <a href="#contact" className="hero-link">
              Contact
            </a>
          </div>
        </div>

        {/* ── ABOUT ── */}
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
                By night and on weekends, a graduate student of Philosophy at
                SFSU — pursuing an M.A. with a certificate in Ethical AI. I
                believe good architecture and good arguments share more
                structure than most people notice, and I'm still working out
                exactly what that means.
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
                  Android SDK · Kotlin · JNI/NDK
                  <br />
                  Jetpack Compose · KMP
                </div>
              </div>
              <div className="aside-item">
                <div className="aside-label">Reading</div>
                <div className="aside-value">
                  Stoicism · Existentialism
                  <br />
                  Jungian Psychology · Ethical AI
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="work">
          <div className="section-label">Experience</div>
          <div>
            {experience.map((job) => (
              <div className="company-row" key={job.company}>
                <div>
                  <div className="company-name">
                    {job.company}
                    {job.current && (
                      <span className="company-badge">Current</span>
                    )}
                  </div>
                  <div className="company-role">{job.role}</div>
                  {job.location && (
                    <div className="company-detail">{job.location}</div>
                  )}
                  {job.detail && (
                    <div className="company-detail">{job.detail}</div>
                  )}
                </div>
                <div className="company-period">{job.period}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects">
          <div className="section-label">Projects</div>
          <div className="projects-grid">
            {projects.map((p) => (
              <div className="project-card" key={p.name}>
                <div className="project-number">{p.number}</div>
                <div className="project-name">{p.name}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.url}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.urlLabel}
                </a>
              </div>
            ))}
          </div>

          <div className="oss-card">
            <div>
              <div className="oss-name">Koin Community Lead</div>
              <div className="oss-desc">
                Writing about Koin's open-source dependency injection ecosystem,
                best practices, and supporting community adoption — since
                October 2024.
              </div>
            </div>
            <a
              href="https://github.com/InsertKoinIO/koin"
              className="oss-link"
              target="_blank"
              rel="noreferrer"
            >
              koin →
            </a>
          </div>
        </section>

        {/* ── WRITING ── */}
        <section id="writing">
          <div className="section-label">Writing</div>
          <div>
            {writing.map((post) => (
              <a
                key={post.url}
                href={post.url}
                className={`post-row${post.featured ? " featured" : ""}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="post-star">✦</span>
                <span className="post-title">{post.title}</span>
                <span className="post-source">{post.source}</span>
                <span className="post-meta">
                  {post.paid && <span className="paywall-badge">Member</span>}
                  {post.year}
                </span>
              </a>
            ))}
          </div>
          <div className="writing-footer">
            <a
              href="https://medium.ivangarzab.com"
              className="hero-link"
              target="_blank"
              rel="noreferrer"
            >
              All writing on Medium →
            </a>
            <span className="hero-divider">/</span>
            <span className="writing-soon">Substack &amp; Dev.to — 2026</span>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact">
          <div className="section-label">Contact</div>
          <p className="contact-intro">
            Whether it's a contract opportunity, a philosophical argument, or
            just an interesting problem — I'm listening.
          </p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row-2">
              <div>
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-input"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-input"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="subject">
                Subject
              </label>
              <input
                className="form-input"
                id="subject"
                type="text"
                placeholder="What's on your mind?"
              />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-input"
                id="message"
                placeholder="The longer the better."
              />
            </div>
            <button className="form-submit" type="submit">
              Send it
            </button>
          </form>
        </section>

        <footer>
          <span className="footer-copy">
            © 2026 Iván Garza Bermea · ivangb6@gmail.com
          </span>
          <p className="footer-quote">
            "One must imagine Sisyphus happy."
            <br />— Albert Camus
          </p>
        </footer>
      </div>
    </>
  );
}
