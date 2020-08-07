import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const MemeTemplatesContext = createContext(null);

export default MemeTemplatesContext;

export const MemeTemplatesProvider = (props) => {
  const [memes, setMemes] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [filteredMemes, setFilteredMemes] = useState([]);

  useEffect(() => {
    axios("https://api.imgflip.com/get_memes").then((res) => {
      setMemes(res.data.data.memes);
      setFilteredMemes(res.data.data.memes);
    });
  }, []);

  const filterMemes = () => {
    let result = memes.filter((item) =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredMemes(result);
  };

  return (
    <MemeTemplatesContext.Provider
      value={{
        memes,
        loading: !memes ? true : false,
        filterText,
        setFilterText,
        filterMemes,
        filteredMemes,
      }}
    >
      {props.children}
    </MemeTemplatesContext.Provider>
  );
};
