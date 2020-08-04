import React from "react";
import smiley from "../../../assets/smiley.svg";
import styles from "./About.module.css";

const About = () => {
  return (
    <article className={styles.About}>
      <section className={styles.AboutContent}>
        <h1>About Us</h1>
        <p>
          We try to make creating memes a lot easier for you with our meme
          generator. We will also improve our app in the future to make it even
          more enjoiable.
        </p>
      </section>
      <section>
        <img src={smiley} width="300" height="225" alt="Smile Emoji" />
      </section>
    </article>
  );
};

export default About;
