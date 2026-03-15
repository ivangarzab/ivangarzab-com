import { useState } from "react";

// Replace with your Formspree endpoint after creating a form at https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact">
      <div className="section-label">Contact</div>
      <p className="contact-intro">
        Whether it's a contract opportunity, a philosophical argument, or
        just an interesting problem — I'm listening.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row-2">
          <div>
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-input"
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
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
            name="subject"
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
            name="message"
            placeholder="I'm listening."
            required
          />
        </div>
        <button className="form-submit" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send it"}
        </button>
        {status === "success" && (
          <p className="form-feedback">Message sent — I'll be in touch.</p>
        )}
        {status === "error" && (
          <p className="form-feedback">Something went wrong. Try again or email me directly.</p>
        )}
      </form>
    </section>
  );
}
