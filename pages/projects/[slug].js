import projects from "../../data/projects.json";

// project prop
export default function Project({ project }) {
  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.name} />
      <a href={project.live}>
        <button>Live Project</button>
      </a>
      <a href={project.github}>
        <button>Live Project</button>
      </a>
    </div>
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
