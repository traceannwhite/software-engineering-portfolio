import styles from "../styles/Home.module.sass";

const Bio = () => {
  return (
    <div className={styles.biocontainer}>
      <img
        src="/images/TW-photo.jpg"
        alt="Photo of Trace"
        className={styles.biophoto}
      />
      <p className={styles.bio}>
        I&apos;m a full-stack software developer with experience as an educator
        in the U.S. and Japan and a great love affair with world history and
        literature. I have a passion for combining my unique makeup of talents
        to bring other&apos;s stories to life through building beautiful,
        functional, and easy-to-use applications that matter for people in the
        here-and-now. My aptitude for building rapport and bridges with and
        between clients, colleagues, and students makes me an excellent additon
        to any team.
      </p>
    </div>
  );
};

export default Bio;
