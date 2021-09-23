import projects from "../data/projects.json";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Software Engineering Portfolio</h1>
      <h2>About Me</h2>
      <p></p>
      <h3>Projects</h3>
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <Link href={`/projects/${project.slug}`}>{project.name}</Link>
          </div>
        );
      })}
      <h2>Languages, Frameworks, and Technologies</h2>
    </main>
  );
}
