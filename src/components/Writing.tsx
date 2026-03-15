import type { WritingEntry } from "../types";

export default function Writing({ writing }: { writing: WritingEntry[] }) {
  return (
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
            <span className="post-meta">
              {post.paid && <span className="paywall-badge">Member</span>}
              {post.year}
            </span>
            <span className="post-source">{post.source}</span>
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
  );
}
