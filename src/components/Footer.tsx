import type { Quote } from "../types";

export default function Footer({ quote }: { quote: Quote | null }) {
  return (
    <footer>
      <span className="footer-copy">
        © 2026 Iván Garza Bermea · ivangb6@gmail.com
      </span>
      {quote && (
        <p className="footer-quote">
          "{quote.text}"
          <br />— {quote.author}
        </p>
      )}
    </footer>
  );
}
