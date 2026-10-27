import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    n: "01",
    category: "COMPUTER VISION · AI",
    title: "AI-Powered Traffic Management System",
    description: "A YOLO-based traffic monitoring project for vehicle detection and traffic-density analysis, with a Streamlit dashboard for visualisation and signal-control logic.",
    stack: ["Python", "YOLO", "OpenCV", "Streamlit"],
    tone: "lavender"
  },
  {
    n: "02",
    category: "FORECASTING · DATA SCIENCE",
    title: "Hybrid NSE Stock Predictor",
    description: "A hybrid forecasting project combining XGBoost and Prophet, with an interactive dashboard for forecasts, trend analysis and model evaluation metrics.",
    stack: ["Python", "XGBoost", "Prophet", "Pandas"],
    tone: "mint"
  },
  {
    n: "03",
    category: "DEEP LEARNING · HEALTHCARE",
    title: "Healthcare Outlier Detection Using Autoencoders",
    description: "An anomaly-detection project exploring reconstruction error to identify unusual patterns after data preprocessing and feature engineering.",
    stack: ["Python", "TensorFlow", "Keras", "Pandas"],
    tone: "peach"
  }
];

const skills = [
  ["Programming", "Python · C++ (basic) · JavaScript"],
  ["AI & Data Science", "Machine learning · Deep learning · NLP · Computer vision · Time-series forecasting"],
  ["Libraries & Frameworks", "TensorFlow · Keras · XGBoost · Prophet · OpenCV · YOLO · Pandas · NumPy"],
  ["Tools & Platforms", "Streamlit · Google Colab · Cursor · HTML · CSS"]
];

const certifications = [
  "AWS Academy Graduate — Machine Learning for Natural Language Processing",
  "CCNA: Introduction to Networks — Cisco Networking Academy",
  "Academic Process Mining Fundamentals — Celonis",
  "Celonis Foundations — Celonis",
  "Generative AI Certificate — Google"
];

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("shambhavi-portfolio-theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch {}
    return "light";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("shambhavi-portfolio-theme", theme); } catch {}
  }, [theme]);

  useEffect(() => {
    const items = document.querySelectorAll(".section, .projects-section, .contact-section, .project-card, .skill, .contact-card");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Shambhavi Rai home">
          <span className="brand-mark">S</span><span>Shambhavi Rai<span className="period">.</span></span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label="Toggle colour theme">
            <span aria-hidden="true">{theme === "light" ? "☾" : "☼"}</span>
            <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
          </button>
          <a className="header-cta" href="#contact">Let’s talk ↗</a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? "✕" : "☰"}</button>
        </div>
      </header>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"></span> OPEN TO OPPORTUNITIES</div>
            <h1>Building thoughtful<br /><span>AI & data</span> experiences.</h1>
            <p className="intro">Hi, I’m <strong>Shambhavi</strong> — an aspiring AI/ML engineer and software developer exploring how technology can solve practical problems.</p>
            <p className="muted">I build and experiment with machine learning, computer vision, forecasting and data-driven applications. I’m looking for opportunities to learn, contribute and grow.</p>
            <div className="hero-buttons">
              <a className="button primary" href="#projects">Explore my work <span>→</span></a>
              <a className="button secondary" href="#contact">Get in touch ↗</a>
            </div>
            <div className="hero-meta"><span>⌁ Greater Noida, India</span><span className="meta-sep"></span><span>Python · AI/ML · Data</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract pastel illustration">
            <div className="art-top"><span>IDEAS → IMPACT</span><span>PORTFOLIO / 2026</span></div>
            <div className="art-canvas">
              <div className="ring ring-a"></div><div className="ring ring-b"></div>
              <div className="shape shape-lavender"></div><div className="shape shape-peach"></div>
              <div className="shape shape-mint"></div><div className="shape shape-blue"></div>
              <div className="spark spark-a">✳</div><div className="spark spark-b">✳</div>
              <div className="art-core">S<span>.</span></div>
              <span className="art-note note-a">curiosity</span><span className="art-note note-b">iteration</span>
            </div>
            <div className="art-bottom"><span>Small steps. Thoughtful work.</span><span>↘</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
        </section>

        <section className="section wrap about" id="about">
          <div className="section-label">01 — ABOUT ME</div>
          <div className="about-grid">
            <h2>Curious by nature.<br /><span>Builder by practice.</span></h2>
            <div className="about-copy">
              <p className="lead">I’m a computer applications student focused on artificial intelligence and machine learning, with hands-on experience building practical projects in Python.</p>
              <p>My work so far has helped me explore computer vision, time-series forecasting, anomaly detection and interactive dashboards. I value clear thinking, collaboration and learning by building.</p>
              <div className="facts">
                <div><small>EDUCATION</small><strong>MCA — Indian Institute of Technology Patna</strong><span>Currently pursuing · </span></div>
                <div><small>UNDERGRADUATE</small><strong>BCA — AI & Machine Learning</strong><span>Galgotias University · Aggregate: 83.4%</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section section" id="projects">
          <div className="wrap">
            <div className="section-top">
              <div><div className="section-label">02 — SELECTED WORK</div><h2>Projects with a purpose<span>.</span></h2></div>
              <p>A selection of AI, machine learning and data projects built to explore real-world problems.</p>
            </div>
            <div className="project-grid">
              {projects.map(p => <article className={`project-card ${p.tone}`} key={p.n}>
                <div className="project-top"><span>{p.n} / 03</span><span className="project-glyph">{p.n === "01" ? "⌘" : p.n === "02" ? "↗" : "◌"}</span></div>
                <div className="category">{p.category}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
                <a className="project-link" href="https://github.com/Shambhavi2306" target="_blank" rel="noreferrer">Explore on GitHub <span>↗</span></a>
              </article>)}
            </div>
            <p className="small-note">Repository links currently point to your GitHub profile. Replace them with individual project repositories when available.</p>
          </div>
        </section>

        <section className="section wrap skills-section" id="skills">
          <div className="section-label">03 — MY TOOLKIT</div>
          <div className="section-top skills-heading"><h2>Tools I work with<span>.</span></h2><p>A growing toolkit for experimenting, building and making sense of data.</p></div>
          <div className="skills-list">{skills.map((s, i) => <div className="skill" key={s[0]}><span className={`skill-number n${i}`}>0{i + 1}</span><div><h3>{s[0]}</h3><p>{s[1]}</p></div><span className="skill-arrow">↗</span></div>)}</div>
        </section>

        <section className="section wrap certifications">
          <div className="section-label">04 — LEARNING</div>
          <div className="cert-grid"><h2>Certifications &<br /><span>continued learning.</span></h2><ul>{certifications.map(c => <li key={c}><span>↗</span>{c}</li>)}</ul></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="wrap contact-grid">
            <div><div className="section-label">05 — WHAT’S NEXT?</div><h2>Let’s make<br />something useful<span>.</span></h2><p>I’m open to internships, entry-level opportunities, collaborations and freelance projects where I can learn and contribute.</p></div>
            <div className="contact-card"><div className="section-label">LET’S CONNECT</div>
              <a className="email-link" href="mailto:shambhavirai003@gmail.com">shambhavirai003@gmail.com ↗</a>
              <div className="social-links"><a href="https://github.com/Shambhavi2306" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/shambhavi-rai-20670438a" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
              <p>Greater Noida, India · Open to opportunities</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">S</span><span>Shambhavi Rai<span className="period">.</span></span></a><p>Designed with care. Built to keep learning.</p><a href="#home">Back to top ↑</a><span>© {new Date().getFullYear()}</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
