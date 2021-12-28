import styles from "../styles/BioPhoto.module.sass";

const BioPhoto = () => {
  return (
    <div className={styles.biophotocontainer}>
      <img
        src="/images/TW-photo.jpg"
        alt="Photo of Trace"
        className={styles.biophoto}
      />
    </div>
  );
};

export default BioPhoto;
