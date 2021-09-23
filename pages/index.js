import projects from "../data/projects.json";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Software Engineering Portfolio</h1>
      <h2>About Me</h2>
      <p>
        As a full-stack developer with prior experience as an educator and
        history enthusiast, I have a strong interest in combining my passions
        for global affairs and building beautiful, functional, and easy-to-use
        applications that matter for people in the here-and-now. My prior
        experiences and abilities help me build rapport with colleagues and
        clients from many different places and backgrounds.
      </p>
      <h3>Projects</h3>
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <Link href={`/projects/${project.slug}`}>{project.name}</Link>
          </div>
        );
      })}
      <Link href="/projects">See More</Link>
      <h2>Languages, Frameworks, and Technologies</h2>
      <p>
        HTML | CSS | Sass | JavaScript | jQuery | React JS | Next JS | Node |
        Express | Python | Django | Git | Github | Chrome Dev Tools | MongoDB |
        Mongoose | FaunaDB | Postman | Heroku
      </p>
    </main>
  );
}
