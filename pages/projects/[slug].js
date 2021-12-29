import projects from "../../data/projects.json";
import styles from "../../styles/ProjectPage.module.sass";
import Link from "next/link";
import LiveLink from "../../components/LiveLink";
import GithubLink from "../../components/GithubLink";

// project prop
export default function Project({ project }) {
  return (
    <main className={styles.productpage}>
      <h1>{project.name}</h1>
      <div className={styles.links}>
        <LiveLink project={project} />
        <GithubLink project={project} />
      </div>
      <div className={styles.card}>
        <div className={styles.details}>
          <p className={styles.description}>{project.description}</p>
        </div>
        <img src={project.image} alt={project.name} className={styles.img} />
      </div>
      <div className={styles.back}>
        <Link href="/" className={styles.backtext}>
          Go Back
        </Link>
      </div>
    </main>
  );
}

// Create possible pages
export async function getStaticPaths() {
  // create an array of slugs
  const paths = projects.map((project) => {
    return { params: { slug: project.slug } };
  });
  return { paths, fallback: false };
}

// Create possible pages
export async function getStaticProps(ctx) {
  // get slug from url
  const slug = ctx.params.slug;

  // find the project with matching slug
  const project = projects.find((p) => p.slug === slug);

  // return project as props
  return {
    props: {
      project,
    },
  };
}
