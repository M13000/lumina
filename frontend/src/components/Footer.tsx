export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h3>Lumina</h3>

        <p>
          Navigate the Financial Universe.
        </p>
      </div>

      <div className="footer-links">
        <div>
          <h4>Platform</h4>
          <a href="#">Markets</a>
          <a href="#">Trading</a>
          <a href="#">Analytics</a>
        </div>

        <div>
          <h4>Security</h4>
          <a href="#">Protection</a>
          <a href="#">Compliance</a>
          <a href="#">Privacy</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Lumina. All rights reserved.
      </div>
    </footer>
  );
}