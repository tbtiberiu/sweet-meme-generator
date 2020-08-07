import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.css";

import MemeGeneratorContext from "../../../contexts/MemeTemplatesContext";

const Search = (props) => {
  const memeContext = useContext(MemeGeneratorContext);

  const handleInputChange = (e) => {
    memeContext.setFilterText(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    memeContext.filterMemes();
    props.history.push("/templates");
  };

  return (
    <form className={styles.SearchForm}>
      <input
        aria-label="Search"
        type="text"
        value={memeContext.filterText}
        onChange={handleInputChange}
        placeholder="Search for meme templates..."
      />
      <button aria-label="Search" onClick={handleSearchClick}>
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </button>
    </form>
  );
};

export default withRouter(Search);
