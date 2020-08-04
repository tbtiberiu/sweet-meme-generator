import React, { useContext, useEffect, useState } from "react";
import styles from "./TemplatesList.module.css";

import TemplateListItem from "./TemplateListItem/TemplateListItem";

import MemeTemplatesContext from "../../../../contexts/MemeTemplatesContext";

const TemplatesList = () => {
  const memeTemplates = useContext(MemeTemplatesContext);
  const [randomNumer, setRandomNumber] = useState(0);

  useEffect(() => {
    if (!memeTemplates.loading) {
      setRandomNumber(
        Math.floor(Math.random() * (memeTemplates.memes.length - 4))
      );
    }
  }, [memeTemplates]);

  const getRandomTemplateListItems = () => {
    const templatesList = [];

    for (let i = randomNumer; i < randomNumer + 5; i++) {
      templatesList.push(
        <TemplateListItem meme={memeTemplates.memes[i]} height="150" key={i} />
      );
    }

    return templatesList;
  };

  return (
    <div className={styles.TemplatesList}>
      <h1>Other templates to choose from</h1>
      <div className={styles.TemplatesListItems}>
        {memeTemplates.loading ? (
          <p>Loading...</p>
        ) : (
          getRandomTemplateListItems()
        )}
      </div>
    </div>
  );
};

export default TemplatesList;
