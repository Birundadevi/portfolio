import React from "react";
import { motion } from "framer-motion";

const navStyle: React.CSSProperties = {
  backgroundColor: "#1f2937",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const linkStyle: React.CSSProperties = {
  margin: "0 1rem",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const scrollTo = (id: string) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
};

const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#f0f4f8", fontFamily: "sans-serif", minHeight: "100vh", color: "#1a202c" }}>
      {/* Navigation Bar */}
      <nav style={navStyle}>
        <a style={linkStyle} href="#about" onClick={() => scrollTo("about")}>About</a>
        <a style={linkStyle} href="#experience" onClick={() => scrollTo("experience")}>Experience</a>
        <a style={linkStyle} href="#skills" onClick={() => scrollTo("skills")}>Skills</a>
        <a style={linkStyle} href="#projects" onClick={() => scrollTo("projects")}>Projects</a>
        <a style={linkStyle} href="#resume" onClick={() => scrollTo("resume")}>Resume</a>
        <a style={linkStyle} href="#contact" onClick={() => scrollTo("contact")}>Contact</a>
      </nav>

      <header style={{ backgroundColor: "#5b21b6", color: "white", padding: "2rem 1.5rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          👩‍💻 Birundadevi Marudachalam | Senior Frontend Developer
        </h1>
        <p style={{ marginTop: "0.5rem", fontSize: "1.25rem" }}>
          React, Next.js, React Native, TypeScript | Based in Abu Dhabi, UAE
        </p>
      </header>

      <main style={{ padding: "2rem", maxWidth: "960px", margin: "0 auto" }}>
        {/* About Section */}
        <motion.section id="about" style={{ display: "grid", gap: "2rem", alignItems: "center", marginBottom: "4rem" }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div>
            <h2 style={{ fontSize: "1.875rem", color: "#2563eb", marginBottom: "1rem" }}>About Me</h2>
            <p style={{ fontSize: "1.125rem", lineHeight: "1.75rem" }}>
              Frontend Developer with 10+ years experience building scalable, user-centric apps in healthcare,
              banking & e-commerce. Specialized in React.js, Next.js, TypeScript, React Native, GraphQL,
              performance optimization and accessible design. Immediate joiner, based in UAE with valid visa.
            </p>
          </div>
          <img
            src="/profile.jpg"
            alt="Birundadevi - Frontend Developer"
            style={{ borderRadius: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", border: "1px solid #ccc", maxWidth: "100%" }}
          />
        </motion.section>

        {/* Experience Section */}
        <motion.section id="experience" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#7c3aed", marginBottom: "1rem" }}>💼 Work Experience</h2>
          <ul style={{ fontSize: "1rem", lineHeight: "1.5rem" }}>
            <li><strong>Frontend Team Lead</strong> @ Accenture (2021 – 2025)</li>
            <li><strong>UI Developer</strong> @ Cognizant (2018 – 2021)</li>
            <li><strong>Associate</strong> @ Infosys (2014 – 2018)</li>
          </ul>
        </motion.section>

        {/* Skills Section */}
        <motion.section id="skills" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#059669", marginBottom: "1rem" }}>🛠️ Technical Skills</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", textAlign: "center" }}>
            <span>React.js</span><span>Next.js</span><span>React Native</span><span>TypeScript</span><span>GraphQL</span>
            <span>Redux</span><span>XState</span><span>HTML5/CSS3</span><span>Node.js</span><span>Jest</span>
          </div>
        </motion.section>

        {/* Projects Section */}
        <section id="projects" style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#4f46e5", marginBottom: "1rem" }}>🚀 Projects</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "0.75rem", backgroundColor: "#fff" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600" }}>E-Commerce Platform</h3>
              <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                Built scalable, SEO-optimized e-commerce site using Next.js and GraphQL with secure payment integration.
              </p>
            </div>
            <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "0.75rem", backgroundColor: "#fff" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600" }}>Healthcare App</h3>
              <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                Developed mobile-friendly React Native healthcare portal with GraphQL API and form validation.
              </p>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <motion.section id="resume" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ea580c", marginBottom: "1rem" }}>📄 Resume</h2>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", backgroundColor: "#ea580c", color: "white", padding: "0.5rem 1rem", borderRadius: "0.75rem", textDecoration: "none" }}>
            Download Resume
          </a>
        </motion.section>

        {/* Contact Section */}
        <motion.section id="contact" style={{ textAlign: "center", marginBottom: "2rem" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#2563eb", marginBottom: "0.5rem" }}>📬 Contact</h2>
          <p>Email: birundadevi.m28@gmail.com</p>
          <p>Phone: +971-58-5676204</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/birundadevi-marudachalam-212a64141/" target="_blank" rel="noopener noreferrer">linkedin.com/in/birundadevi-marudachalam</a></p>
          <p>Location: Abu Dhabi, UAE</p>
        </motion.section>
      </main>

      <footer style={{ marginTop: "3rem", backgroundColor: "#e5e7eb", padding: "1rem", textAlign: "center", fontSize: "0.875rem", color: "#4b5563" }}>
        © 2025 Birundadevi Marudachalam | Senior Frontend Developer | UAE
      </footer>
    </div>
  );
};

export default Home;