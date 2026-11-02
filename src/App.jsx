
import { useEffect, useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "Fashion House",
    category: "E-commerce Website",
    description:
      "A fashion shopping experience designed for browsing products, searching collections, managing a wishlist, and adding items to a cart.",
    technologies: ["React", "JavaScript", "CSS"],
    visual: "fashion",
    label: "STYLE / COMMERCE",
  },
  {
    number: "02",
    title: "Recipe Finder",
    category: "Web Application",
    description:
      "A recipe discovery application that helps users explore meal ideas and save their favorite recipes for later.",
    technologies: ["React", "JavaScript", "API Integration"],
    visual: "recipe",
    label: "DISCOVER / COOK",
  },
  {
    number: "03",
    title: "Hand Gestures",
    category: "Computer Vision",
    description:
      "A computer vision project that uses hand gestures captured by a camera to control screen brightness.",
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    visual: "gestures",
    label: "VISION / INTERACTION",
  },
  {
    number: "04",
    title: "CineFinder",
    category: "Web Project",
    description:
      "A project in my portfolio. Explore the project details and implementation through the links I add here.",
    technologies: [],
    visual: "cinefinder",
    label: "MOVIES / DISCOVERY",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Responsive Design",
  "Git & GitHub",
  "Python",
  "OpenCV",
  "API Integration",
];


const contactLinks = [
  {
    label: "Email",
    value: "Your professional email",
    href: "mailto:k2004gharat@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/kirti-gharat/",
  },
  {
    label: "GitHub",
    value: "GitHub Profile",
    href: "https://github.com/k2004gharat-collab/",
  },
  
{
  label: "Book a Meeting",
  value: "Schedule a meeting with me",
  href: "https://calendly.com/k2004gharat/30min",
},

];


function ProjectVisual({ project }) {
  return (
    <div className={`project-visual visual-${project.visual}`}>
      <div className="visual-topbar">
        <span className="visual-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="visual-label">{project.label}</span>
      </div>

      {project.visual === "fashion" && (
        <div className="fashion-art">
          <div className="fashion-copy">
            <span>NEW COLLECTION</span>
            <strong>Find your<br />own style.</strong>
            <small>EXPLORE THE EDIT ↗</small>
          </div>
          <div className="fashion-shape fashion-shape-one" />
          <div className="fashion-shape fashion-shape-two" />
          <div className="fashion-shape fashion-shape-three" />
        </div>
      )}

      {project.visual === "recipe" && (
        <div className="recipe-art">
          <div className="recipe-heading">
            <span>YOUR NEXT FAVORITE</span>
            <strong>Something<br />delicious.</strong>
          </div>
          <div className="recipe-plates">
            <div className="recipe-plate plate-one">
              <span>✳</span>
            </div>
            <div className="recipe-plate plate-two">
              <span>✦</span>
            </div>
            <div className="recipe-plate plate-three">
              <span>✳</span>
            </div>
          </div>
          <div className="recipe-search">⌕ &nbsp; Find a recipe</div>
        </div>
      )}

      {project.visual === "gestures" && (
        <div className="gesture-art">
          <div className="gesture-orbit orbit-one" />
          <div className="gesture-orbit orbit-two" />
          <div className="gesture-center">
            <span>✳</span>
          </div>
          <div className="gesture-readout">
            <span>BRIGHTNESS</span>
            <strong>72%</strong>
            <div className="brightness-track">
              <i />
            </div>
            <small>GESTURE DETECTED</small>
          </div>
        </div>
      )}

      {project.visual === "cinefinder" && (
        <div className="cine-art">
          <span className="cine-kicker">YOUR NEXT WATCH</span>
          <strong>Stories<br />worth seeing.</strong>
          <div className="cine-film">
            <span>▶</span>
          </div>
          <div className="cine-bottom">DISCOVER SOMETHING NEW ↗</div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The portfolio still works if browser storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <div className="portfolio" data-theme={theme}>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Go to homepage">
            <span className="brand-mark">K.</span>
            <span className="brand-name">PORTFOLIO<span> / DEVELOPER</span></span>
          </a>

          
<div className="nav-links">
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
  <a href="#updates">Updates</a>
  <a href="#skills">Skills</a>
  <a href="#contact">Contact</a>
</div>


          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
            <span className="theme-toggle-label">
              {theme === "light" ? "Dark" : "Light"}
            </span>
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section container" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              FRONTEND DEVELOPER PORTFOLIO
            </div>

            <h1>
              Building digital
              <br />
              experiences with
              <br />
              <span>purpose & clarity.</span>
            </h1>

            <p className="hero-description">
              I’m Kirti Gharat, a frontend developer focused on building
              functional, accessible, and user-friendly web experiences.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch
              </a>
            </div>

            <div className="hero-footnote">
              <span>DESIGN-MINDED</span>
              <i />
              <span>DETAIL-FOCUSED</span>
              <i />
              <span>ALWAYS LEARNING</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative blue geometric artwork">
            <div className="art-grid" />
            <div className="art-orbit art-orbit-one" />
            <div className="art-orbit art-orbit-two" />
            <div className="art-square art-square-one" />
            <div className="art-square art-square-two" />
            <div className="art-main-shape">
              <span>K</span>
            </div>
            <div className="art-caption">
              <span>CREATIVE THINKING</span>
              <strong>Meets clean code.</strong>
            </div>
            <div className="art-index">01 — 04</div>
          </div>
        </section>

        <div className="ticker" aria-label="Portfolio focus areas">
          <div className="ticker-track">
            {Array.from({ length: 2 }, (_, index) => (
              <div className="ticker-group" key={index}>
                <span>FRONTEND DEVELOPMENT</span><i />
                <span>THOUGHTFUL UI</span><i />
                <span>RESPONSIVE DESIGN</span><i />
                <span>CONTINUOUS LEARNING</span><i />
              </div>
            ))}
          </div>
        </div>

        <section className="section container about-section" id="about">
          <div className="section-heading">
            <span className="eyebrow">01 / A LITTLE ABOUT ME</span>
            <h2>Curiosity drives<br />the <span>work I do.</span></h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I enjoy turning ideas into interfaces that feel simple,
              intuitive, and useful.
            </p>
            <p>
              My work brings together frontend development, thoughtful
              presentation, and a willingness to learn by building. I enjoy
              exploring how technology can solve everyday problems and how
              small design decisions can make a product easier to use.
            </p>
            <p>
              Through personal projects, I keep developing my skills in
              React, JavaScript, responsive layouts, and interactive
              experiences.
            </p>
            <a className="text-link" href="#skills">
              What I work with <span aria-hidden="true">↘</span>
            </a>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="container">
            <div className="projects-heading">
              <div>
                <span className="eyebrow">02 / SELECTED WORK</span>
                <h2>Projects with<br /><span>a purpose.</span></h2>
              </div>
              <p>
                A collection of projects exploring web experiences,
                practical tools, and creative problem-solving.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <ProjectVisual project={project} />

                  <div className="project-details">
                    <div className="project-meta">
                      <span>{project.category}</span>
                      <span className="project-number">{project.number}</span>
                    </div>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    {project.technologies.length > 0 && (
                      <div className="tech-list" aria-label="Technologies used">
                        {project.technologies.map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                      </div>
                    )}

                    <div className="project-footer">
                      <span className="project-status">
                        {project.visual === "cinefinder"
                          ? "PROJECT DETAILS TO BE ADDED"
                          : "PROJECT SHOWCASE"}
                      </span>
                      <span className="project-arrow" aria-hidden="true">↗</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="projects-note">
              Project previews are illustrative designs. Add your actual
              screenshots and verified demo or repository links when ready.
            </p>
          </div>
        </section>

        
        <section className="section container updates-section" id="updates">
          <div className="updates-heading">
            <div>
              <span className="eyebrow">03 / WHAT I'M BUILDING</span>
              <h2>Learning, building,<br /><span>and moving forward.</span></h2>
            </div>
            <p>
              A space for sharing my capstone progress, development journey,
              and ideas I explore along the way.
            </p>
          </div>

          <div className="updates-grid">
            <article className="update-card">
              <span className="update-number">01 / CAPSTONE</span>
              <h3>Capstone Project</h3>
              <p>
                Follow my journey as I develop, improve, and document my
                capstone project.
              </p>
              <span className="update-status">PROJECT UPDATES COMING SOON</span>
            </article>

            <article className="update-card">
              <span className="update-number">02 / LEARNING</span>
              <h3>Future Posts</h3>
              <p>
                A place for future articles, technical learnings, and
                development insights.
              </p>
              <span className="update-status">NEW POSTS COMING SOON</span>
            </article>
          </div>
        </section>


        <section className="section container skills-section" id="skills">
          <div className="skills-intro">
            <span className="eyebrow">03 / MY TOOLKIT</span>
            <h2>Tools for turning<br /><span>ideas into reality.</span></h2>
            <p>
              Technologies and skills I use across my projects and continue
              to strengthen through practice.
            </p>
          </div>

          <div className="skills-content">
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-item" key={skill}>
                  <span className="skill-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{skill}</span>
                  <span className="skill-symbol" aria-hidden="true">↗</span>
                </div>
              ))}
            </div>
            <div className="learning-note">
              <span className="learning-icon" aria-hidden="true">✳</span>
              <div>
                <strong>Always in progress.</strong>
                <p>Learning through building, testing, and improving.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div className="contact-copy">
              <span className="eyebrow">04 / LET’S CONNECT</span>
              <h2>
                Have an idea?
                <br />
                <span>Let’s make it real.</span>
              </h2>
              <p>
                Interested in my work or have an opportunity to discuss?
                I’d be happy to connect.
              </p>
            </div>

            <div className="contact-side">
              <p className="contact-label">FIND ME HERE</p>

              {contactLinks.some((link) => link.href && link.value) ? (
                <div className="contact-links">
                  {contactLinks
                    .filter((link) => link.href && link.value)
                    .map((link) => (
                      <a
                        href={link.href}
                        key={link.label}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        <span>{link.label}</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                </div>
              ) : (
                <p className="contact-placeholder">
                  Contact links will appear here once you add your real details.
                </p>
              )}

              <a className="button button-light" href="#home">
                Back to top <span aria-hidden="true">↑</span>
              </a>
            </div>

            <div className="contact-decoration" aria-hidden="true">K.</div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">K.</span>
            <span className="brand-name">KIRTI GHARAT</span>
          </a>
          <p>Designed with care. Built to keep learning.</p>
          <span>© {new Date().getFullYear()} Kirti Gharat</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
