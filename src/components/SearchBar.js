
import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm.toLowerCase());
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search events by name or location"
        value={searchTerm}
        onChange={handleInputChange}
        className="search-bar"
      />
      <button onClick={handleSearchClick} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
