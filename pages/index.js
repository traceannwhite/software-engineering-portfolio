import projects from "../data/projects.json";
import SocialMedia from "../components/SocialMedia";
import Bio from "../components/Bio";
import Skills from "../components/Skills";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/Home.module.sass";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.headline}>
        <h1>Hi, my name is Trace,</h1>
        <h1>and I&apos;m a Software Developer.</h1>
      </div>
      <SocialMedia />
      <div className={styles.about} id="div_id_1">
        <Bio />
      </div>
      <div className={styles.tech}>
        <h1 className={styles.techtitle}>
          Languages, Frameworks, and Technologies
        </h1>
        <Skills />
      </div>
      <div id="div_id_2">
        <h1 className={styles.projectstitle}>Projects</h1>
        <div className={styles.projects}>
          {projects.map((project, index) => {
            return <ProjectCard project={project} index={index} />;
          })}
        </div>
      </div>
    </main>
  );
}
