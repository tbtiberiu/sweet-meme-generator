import React, { useContext } from "react";
import styles from "./Memes.module.css";

import MemeTemplateItem from "./MemeTemplateItem/MemeTemplateItem";

import MemeTemplatesContext from "../../../contexts/MemeTemplatesContext";

const Memes = () => {
  const memeTemplates = useContext(MemeTemplatesContext);

  return (
    <div className={styles.Memes}>
      <h1>Meme Templates</h1>
      <div className={styles.MemesItems}>
        {memeTemplates.loading ? (
          <p>Loading...</p>
        ) : (
          memeTemplates.memes.map((meme, index) => (
            <MemeTemplateItem meme={meme} height="200" key={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default Memes;
