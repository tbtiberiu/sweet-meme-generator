import React, { useContext, useState } from "react";
import axios from "axios";
import styles from "./MemeGenerator.module.css";

import MemeGeneratorContext from "../../../../contexts/MemeGeneratorContext";

const MemeGenerator = () => {
  const memeContext = useContext(MemeGeneratorContext);
  const [createdMeme, setCreatedMeme] = useState(null);

  const handleResetClickButton = () => {
    memeContext.setTopText("");
    memeContext.setBottomText("");
  };

  const handleTopTextInput = (e) => {
    memeContext.setTopText(e.target.value);
  };

  const handleBottomTextInput = (e) => {
    memeContext.setBottomText(e.target.value);
  };

  const createMeme = (e) => {
    if (memeContext.meme) {
      axios({
        method: "post",
        url: "https://api.imgflip.com/caption_image",
        params: {
          template_id: memeContext.meme.id,
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD,
          text0: memeContext.topText,
          text1: memeContext.bottomText,
        },
      }).then((res) => {
        if (res.data.success) {
          setCreatedMeme(res.data.data);
        } else {
          alert("Please write something in the inputs.");
        }
      });
    } else {
      alert("Please select a meme");
    }
  };

  return (
    <div className={styles.MemeGenerator}>
      <div>
        <h1>{memeContext.meme ? memeContext.meme.name : "Meme Title"}</h1>
        {memeContext.meme ? (
          <img
            src={memeContext.meme.url}
            alt={memeContext.meme.name}
            width="500"
          />
        ) : (
          <h2>Choose a template from below or from the Templates tab.</h2>
        )}
      </div>
      <div className={styles.MemeGeneratorForm}>
        <button onClick={handleResetClickButton}>Reset</button>
        <form>
          <input
            type="text"
            value={memeContext.topText}
            placeholder="Top text"
            onChange={handleTopTextInput}
          />
          <input
            type="text"
            value={memeContext.bottomText}
            placeholder="Bottom text"
            onChange={handleBottomTextInput}
          />
          <div></div>
          <input type="button" value="Generate meme" onClick={createMeme} />
        </form>
        {createdMeme ? (
          <p>
            Your meme:{" "}
            <a
              href={createdMeme.page_url}
              alt="Your meme"
              target="_blank"
              rel="noopener noreferrer"
            >
              {createdMeme.page_url}
            </a>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default MemeGenerator;
