import React, { createContext, useState } from "react";

const MemeGeneratorContext = createContext(null);

export default MemeGeneratorContext;

export const MemeGeneratorProvider = (props) => {
  const [meme, setMeme] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  return (
    <MemeGeneratorContext.Provider
      value={{ meme, setMeme, topText, setTopText, bottomText, setBottomText }}
    >
      {props.children}
    </MemeGeneratorContext.Provider>
  );
};
