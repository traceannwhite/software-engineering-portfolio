import projects from "../data/projects.json";
import Link from "next/link";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.sass";
import { MdEmail } from "react-icons/md";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { RiHaze2Fill } from "react-icons/ri";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.headline}>
        <h1>Hi, my name is Trace,</h1>
        <h1>and I&apos;m a Software Developer.</h1>
      </div>
      <div className={styles.social}>
        <a
          href="mailto:traceannwhite@gmail.com"
          target="_blank"
          rel="noreferrer"
          alt="Email"
          role="img"
          aria-label="Email Icon"
        >
          <MdEmail className={styles.socialicon} />
        </a>
        <a
          href="https://www.linkedin.com/in/tracewhite/"
          target="_blank"
          rel="noreferrer"
          alt="LinkedIn"
          role="img"
          aria-label="LinkedIn Icon"
        >
          <SiLinkedin className={styles.socialicon} />
        </a>
        <a
          href="https://github.com/traceannwhite"
          target="_blank"
          rel="noreferrer"
          alt="Github"
          role="img"
          aria-label="Github Icon"
        >
          <SiGithub className={styles.socialicon} />
        </a>
      </div>
      <div className={styles.about} id="div_id_1">
        <div className={styles.biocontainer}>
          <img
            src="/images/TW-photo.jpg"
            alt="Photo of Trace"
            className={styles.biophoto}
          />
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
        <h1 className={styles.techtitle}>
          Languages, Frameworks, and Technologies
        </h1>
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
                    <h2 className={styles.projectname}>{project.name}</h2>
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
