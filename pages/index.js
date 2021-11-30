import projects from "../data/projects.json";
import SocialMedia from "../components/SocialMedia";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/Home.module.sass";
import BioPhoto from "../components/BioPhoto";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.firstcontainer}>
        <div className={styles.content}>
          <div className={styles.headline}>
            <h1>TRACE WHITE</h1>
            <h1>Full-stack Developer</h1>
          </div>
          <BioPhoto />
          <SocialMedia />
          <div className={styles.biosnippet}>
            <p>Welcome. </p>
            <p>
              I&apos;m a software developer with prior experience as an educator
              in the U.S. and Japan. I have a passion for building beautiful,
              functional, and easy-to-use applications that bring stories to
              life.
            </p>
          </div>
        </div>
      </div>
      <div id="div_id_2">
        <h1 className={styles.projectstitle}>Projects</h1>
        <div className={styles.projects}>
          {projects.map((project, index) => {
            return <ProjectCard project={project} key={index} />;
          })}
        </div>
      </div>
      <div className={styles.about} id="div_id_1">
        <About />
      </div>
      <div className={styles.tech}>
        <h1 className={styles.techtitle}>
          Languages, Frameworks, and Technologies
        </h1>
        <Skills />
      </div>
    </main>
  );
}

