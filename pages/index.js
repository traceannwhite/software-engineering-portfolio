import projects from "../data/projects.json";
import SocialMedia from "../components/SocialMedia";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/Home.module.sass";
import BioPhoto from "../components/BioPhoto";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.firstcontainer}>
        <div className={styles.content}>
          <div className={styles.headline}>
            <h1>TRACE WHITE</h1>
            <h1>Full-stack Developer</h1>
          </div>
          <BioPhoto />
          <SocialMedia />
          <div className={styles.biosnippet}>
            <p>Welcome. </p>
            <p>
              I&apos;m a software developer with prior experience as an educator
              in the U.S. and Japan. I have a passion for building beautiful,
              functional, and easy-to-use applications that bring stories to
              life.
            </p>
          </div>
        </div>
      </div>
      <div id="div_id_2">
        <h1 className={styles.projectstitle}>Projects</h1>
        <div className={styles.projects}>
          {projects.map((project, index) => {
            return <ProjectCard project={project} index={index} />;
          })}
        </div>
      </div>
      <div className={styles.about} id="div_id_1">
        <About />
      </div>
      <div className={styles.tech}>
        <h1 className={styles.techtitle}>
          Languages, Frameworks, and Technologies
        </h1>
        <Skills />
      </div>
    </main>
  );
}

// {
//   "name": "Songify (Spotify Clone)",
//   "image": "",
//   "slug": "songify_spotify_clone",
//   "description": "Built in React.js, I recreated this spotify clone using a tutorial as a starting point. Already having a good foundation in using React Hooks, this project helped solidify best practices and built on my existing knowledge of the framework. It also features the Spotify API, user authentification through the Spotify API, responsive design, Material UI, and Firebase. I had not worked with the Spotify API, Material UI, or React Context API prior to this project, so it was fun adding these to my software engineering toolkit. Material UI has turned out to be an excellent and straightforward framework for creating responsive UI more quickly. (Stay tuned for other projects using Material UI!) I also got the chance to learn more about React Context API, which is very similar to Redux. Lastly, it is hosted on Firebase, which was first for me. Firebase made creating a new application very easy since it's already connected to my Google account. While Firebase does create a backend for the application, here we are just using it mostly for deployment. Because I had prior expereince with React, I did make some changes as I went through the tutorial such as choosing to use arrow functions and also using the latest React syntax and tools as applicable since it's an older tutorial. This was a fun challenge because I didn't use React at the time this tutorial was made so I was able to practice updating old React best practices with modern best practices. ",
//   "tech": [
//     "React.js",
//     "Spotify API",
//     "Responsive Design",
//     "Material UI",
//     "React Context API",
//     "Firebase"
//   ],
//   "code_snippet": "",
//   "live": "https://resonanceandwonder-project.vercel.app/",
//   "github": "https://github.com/traceannwhite/resonanceandwonder-project"
// },
