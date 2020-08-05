import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import sweetMeme from "../../../assets/sweet-meme.jpg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.HomeHero}>
      <div className={styles.ImageDiv}>
        <img src={sweetMeme} width="501" height="480" alt="Hero meme" />
      </div>
      <div className={styles.ContentDiv}>
        <h1>
          Create and share <br />
          your memes <br />
          <span>fast</span> and <span>easy</span>.
        </h1>
        <Link to="/create-a-meme">
          Create a meme{" "}
          <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "25px" }} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
