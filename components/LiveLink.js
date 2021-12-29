import styles from "../styles/Links.module.sass";
import { FaDesktop } from "react-icons/fa";

const LiveLink = ({ project, index }) => {
  return (
    <div key={index} className={styles.container}>
      <a href={project.liveUrl} target="_blank" rel="noreferrer">
        <button className={styles.links}>
          <FaDesktop className={styles.link} />
        </button>
      </a>
    </div>
  );
};

export default LiveLink;
