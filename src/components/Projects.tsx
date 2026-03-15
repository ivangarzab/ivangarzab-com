import type { Project } from "../types";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects">
      <div className="section-label">Projects</div>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.name}>
            {p.icon && (
              <img className="project-icon" src={p.icon} alt="" aria-hidden="true" />
            )}
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
            best practices, and supporting community adoption,
            while helping them translate articles in their own blo.
             — since October 2024.
          </div>
        </div>
        <a
          href="https://koinchampion.kotzilla.io/apply-now"
          className="oss-link"
          target="_blank"
          rel="noreferrer"
        >
          koin →
        </a>
      </div>
    </section>
  );
}
