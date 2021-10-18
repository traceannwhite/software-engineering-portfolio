import Link from "next/link";
import styles from "../styles/Home.module.sass";

const ProjectCard = ({ project, index }) => {
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
};

export default ProjectCard;
