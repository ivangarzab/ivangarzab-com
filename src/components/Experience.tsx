import { useEffect, useState } from "react";
import type { Experience as ExperienceType } from "../types";

export default function Experience() {
  const [experience, setExperience] = useState<ExperienceType[]>([]);

  useEffect(() => {
    fetch("/data/experience.json")
      .then((res) => res.json())
      .then(setExperience);
  }, []);

  return (
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
  );
}
