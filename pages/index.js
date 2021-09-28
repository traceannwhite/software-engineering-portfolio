import projects from "../data/projects.json";
import Link from "next/link";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main>
      <h3>Hi, my name is Trace,</h3>
      <h2>and I&aposm a Software Developer.</h2>
      <div>
        <h3>About Me</h3>
        <p>
          I&apos;m a full-stack software developer with experience as an
          educator in the U.S. and Japan and a great love affair with world
          history and literature. I have a passion for combining my unique
          makeup of talents to bring other&apos;s stories to life through
          building beautiful, functional, and easy-to-use applications that
          matter for people in the here-and-now. My aptitude for building
          rapport and bridges with and between clients, colleagues, and students
          makes me an excellent additon to any team.
        </p>
      </div>
      <div>
        <h3>Projects</h3>
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <Link href={`/projects/${project.slug}`}>{project.name}</Link>
            </div>
          );
        })}
        <Link href="/projects">See More</Link>
      </div>
      <div>
        <h3>Languages, Frameworks, and Technologies</h3>
        <Skills />
      </div>
    </main>
  );
}
