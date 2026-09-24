
import "./App.css";

function App() {
  return (
    <main className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#">
          KG<span>.</span>
        </a>
        <span className="nav-label">PORTFOLIO</span>
      </nav>

      <section className="hero">
        <p className="eyebrow">HELLO, I'M</p>

        <h1>Kirti Gharat</h1>

        <h2>Frontend Developer</h2>

        <p className="description">
          I turn ideas into functional, accessible,
          and user-friendly web experiences.
        </p>

        <p className="coming-soon">
          My portfolio is coming soon.
        </p>
      </section>

      <footer>
        © 2026 Kirti Gharat
      </footer>
    </main>
  );
}

export default App;