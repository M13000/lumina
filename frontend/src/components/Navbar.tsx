import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />

      <div className="nav-links">
        <a href="#">Markets</a>
        <a href="#">Platform</a>
        <a href="#">About</a>
      </div>

      <button className="login-btn">
        Login
      </button>
    </nav>
  );
}