import Navbar from "./components/navBar";
import Section from "./components/section";
import ProjectCard from "./components/projectCard";
import { projects } from "./data/projects";
import TechStack from "./components/TechStack";
import Footer from "./components/footer";
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className = "hero-mobile-wrapper">
        <div className="container" style={{ padding: "100px 0" }}>
          <h1 className="dev-name">Leogelio Gabriel</h1>
          <p className="subtitle">
            Aspiring Full Stack Developer
          </p>
          <TechStack />
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about" title="About Me">
        <p className="about-subtitle">
          I'm Gio, a Computer Science graduate from the National College of Science and Technology based in Cavite, Philippines.
          I focus on building web applications and am currently developing projects using JavaScript and React, while continuing to expand my knowledge into backend technologies.
          </p>
          
          <p className="about-subtitle">I enjoy solving problems and building practical, creative solutions through code.
          I find satisfaction in working through difficult problems and arriving at solutions, which keeps me motivated to learn and improve.</p>
        
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Section>

      <Contact />

      <Footer />
      
    </>
  );
}


export default App;