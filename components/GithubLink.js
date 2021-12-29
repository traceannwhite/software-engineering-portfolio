import styles from "../styles/Links.module.sass";
import { BsGithub } from "react-icons/bs";

const GithubLink = ({ project, index }) => {
  return (
    <div key={index} className={styles.container}>
      {/* show link to github if url exisits, don't display if url="" */}
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <button className={styles.links}>
          <BsGithub className={styles.link} />
        </button>
      </a>
    </div>
  );
};

export default GithubLink;
