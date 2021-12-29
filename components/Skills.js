import Link from "next/link";
import styles from "../styles/Skills.module.sass";

export default function Skills() {
  return (
    <div className={styles.tech}>
      <h1 className={styles.techtitle}>
        Languages, Frameworks, and Technologies
      </h1>
      <p className="skills">
        HTML | CSS | Sass | JavaScript | Python | jQuery | React.js | Redux |
        Next.js | ReactStrap | Node | Git | Github | Chrome Dev Tools | MongoDB
        | MongoDB Realm | Django | Mongoose | Postman | Oauth | Heroku | Vercel
        | WordPress | PHP | Laravel | Shopify | Webflow
      </p>
    </div>
  );
}
