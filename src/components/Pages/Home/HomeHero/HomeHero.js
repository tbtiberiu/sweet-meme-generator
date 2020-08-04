import React from "react";
import { Link } from "react-router-dom";
import sweetMeme from "../../../../assets/sweet-meme.jpg";
import styles from "./Home.module.css";

const HomeHero = () => {
  return (
    <section className={styles.HomeHero}>
      <div className={styles.ImageDiv}>
        <img src={sweetMeme} width="501" height="480" alt="Hero meme" />
      </div>
      <div className={styles.ContentDiv}>
        <h1>
          Create and share <br />
          your memes <br />
          <span>fast</span> and <span>easy</span>.
        </h1>
        <Link to="/create-a-meme">Create a meme</Link>
      </div>
    </section>
  );
};

export default HomeHero;
