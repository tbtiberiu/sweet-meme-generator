import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <form className={styles.SearchForm}>
      <input
        aria-label="Search"
        type="text"
        placeholder="Search for meme templates..."
      />
      <button aria-label="Search">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </button>
    </form>
  );
};

export default Search;
