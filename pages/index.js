import projects from "../data/projects.json";
import SocialMedia from "../components/SocialMedia";
import About from "../components/About";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/Home.module.sass";
import BioPhoto from "../components/BioPhoto";
import SnowflakesAnimation from "../components/SnowflakesAnimation";
import Introduction from "../components/Introduction";
import HeroIcons from "../components/HeroIcons";

export default function Home() {
  return (
    <main className={styles.main}>
      <SnowflakesAnimation />
      <div className={styles.firstcontainer}>
        <HeroIcons />
        <Introduction className={styles.introduction} />
        <SocialMedia />
      </div>

      <div id="div_id_2">
        <h1 className={styles.projectstitle}>Recent Work</h1>
        <div className={styles.projects}>
          {projects.map((project, index) => {
            return <ProjectCard project={project} key={index} />;
          })}
        </div>
      </div>
    </main>
  );
}
