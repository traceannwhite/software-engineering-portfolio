import projects from "../data/projects.json";
import Link from "next/link";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.sass";
import { MdEmail } from "react-icons/md";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.headline}>
        <h2 className={styles.title}>Hi, my name is Trace,</h2>
        <h1>and I&apos;m a Software Developer.</h1>
      </div>
      <div className={styles.social}>
        <Link href="mailto:traceannwhite@gmail.com" target="_blank">
          <MdEmail className={styles.socialicon} />
        </Link>
        <Link href="https://www.linkedin.com/in/tracewhite/" target="_blank">
          <SiLinkedin className={styles.socialicon} />
        </Link>
        <Link href="https://github.com/traceannwhite" target="_blank">
          <SiGithub className={styles.socialicon} />
        </Link>
      </div>
      <div className={styles.about} id="div_id_1">
        <div className={styles.biocontainer}>
          <img src="/images/TW-photo.jpg" className={styles.biophoto} />
          <p className={styles.bio}>
            I&apos;m a full-stack software developer with experience as an
            educator in the U.S. and Japan and a great love affair with world
            history and literature. I have a passion for combining my unique
            makeup of talents to bring other&apos;s stories to life through
            building beautiful, functional, and easy-to-use applications that
            matter for people in the here-and-now. My aptitude for building
            rapport and bridges with and between clients, colleagues, and
            students makes me an excellent additon to any team.
          </p>
        </div>
      </div>
      <div className={styles.tech}>
        <h3 className={styles.title}>
          Languages, Frameworks, and Technologies
        </h3>
        <Skills />
      </div>
      <div id="div_id_2">
        <h1 className={styles.projectstitle}>Projects</h1>
        <div className={styles.projects}>
          {projects.map((project, index) => {
            return (
              <div key={index} className={styles.projectcard}>
                <Link href={`/projects/${project.slug}`}>
                  <div className={styles.projectinfo}>
                    <h3 className={styles.projectname}>{project.name}</h3>
                    <img
                      src={project.image}
                      alt={project.name}
                      className={styles.projectimage}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
