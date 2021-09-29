import projects from "../../data/projects.json";
import styles from "../../styles/ProjectPage.module.sass";

// project prop
export default function Project({ project }) {
  return (
    <main className={styles.productpage}>
      <div className={styles.card}>
        <div className={styles.details}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <img src={project.image} alt={project.name} className={styles.img} />
        </div>
        <div className={styles.buttons}>
          <a href={project.live}>
            <button>Live Project</button>
          </a>
          <a href={project.github}>
            <button>Github Repo</button>
          </a>
        </div>
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
