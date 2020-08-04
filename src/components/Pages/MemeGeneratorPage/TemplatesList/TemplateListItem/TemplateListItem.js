import React, { useContext } from "react";

import MemeGeneratorContext from "../../../../../contexts/MemeGeneratorContext";

const TemplateListItem = (props) => {
  const memeContext = useContext(MemeGeneratorContext);

  const handleImageClick = () => {
    memeContext.setMeme({ ...props.meme });
  };

  return (
    <img
      src={props.meme.url}
      alt={props.meme.name}
      height={props.height}
      onClick={handleImageClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default TemplateListItem;
