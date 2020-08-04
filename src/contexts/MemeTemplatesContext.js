import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const MemeTemplatesContext = createContext(null);

export default MemeTemplatesContext;

export const MemeTemplatesProvider = (props) => {
  const [memes, setMemes] = useState(null);

  useEffect(() => {
    axios("https://api.imgflip.com/get_memes").then((res) => {
      setMemes(res.data.data.memes);
    });
  }, [setMemes]);

  return (
    <MemeTemplatesContext.Provider
      value={{ memes, loading: !memes ? true : false }}
    >
      {props.children}
    </MemeTemplatesContext.Provider>
  );
};
