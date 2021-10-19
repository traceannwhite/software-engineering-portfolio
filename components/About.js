import styles from "../styles/Home.module.sass";

const Bio = () => {
  return (
    <div className={styles.aboutcontainer}>
      <div className={styles.about}>
        <p>
          I was born and raised in Edmond, Oklahoma and went to college at
          Oklahoma State University. While in college I studied abroad in
          Ireland and did a student exchange program at University of
          Washington. I chose a degree in history becuase of my deep love of
          stories detailing the human experience and the endless new experiences
          that learning about new cultures offered. That interest in the stories
          of other cultures stayed with me and led me to get certified to teach
          English as Second Language and move to Japan.
        </p>
        <p>
          Being a teacher in Japan came with many workplace and personal
          challenges that had me problem-solving every time I walked out my
          front door. My favorite part of working and teaching in Japan was
          collaborating with Japanese colleagues and students on cross-cultural
          learning activities, as well as opening myself up to a whole new way
          of living. I would have opted to stay longer, but personal reasons
          brought me back to my home state of Oklahoma in 2019.
        </p>
        <p>
          Once I got back, I worked as an educator for 2 years in Oklahoma City.
          However, I quickly realized that what I loved about being an educator
          in Japan didn’t completely translate to the United States. It was then
          that I started looking for what was next for me.
        </p>
        <p>Enter Software Engineering.</p>
        <p>
          What drew me to the profession was the creatity and problem-solving
          that I had longed for in other career paths, but was never quite able
          to obtain. As soon as I made the leap into software engineering it
          filled many, if not all, of the professional and personal holes that
          existed for me while in education. I love seeing my work come to life
          as I work, getting lost in thought, and feeling a sense of
          accomplishment with each design implemented or problem solved.
        </p>
      </div>
    </div>
  );
};

export default Bio;
