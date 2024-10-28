
import React, { useState } from "react";
import EventList from "./components/EventList";
import SearchBar from "./components/SearchBar";
import "./styles/App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <div className="app-background"></div>
      <div className="app">
      <SearchBar onSearch={handleSearch} />
      <EventList searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default App;
