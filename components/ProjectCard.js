import Link from "next/link";
import styles from "../styles/ProjectCard.module.sass";

const ProjectCard = ({ project, index }) => {
  return (
    <div key={index} className={styles.recentwork}>
      <Link href={`/projects/${project.slug}`}>
        <div className={styles.container}>
          <div
            className={styles.display}
            style={{
              backgroundImage: `url(
              "https://res.cloudinary.com/dhcagrzcb/image/upload/v1640635230/macbook-white_d4g6vs.png"
            )`,
            }}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
          </div>
          <div className={styles.details}>
            <h2 className={styles.name}>{project.name}</h2>
            <p className={styles.short}>{project.short}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
