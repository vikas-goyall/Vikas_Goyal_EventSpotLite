
import React, { useState } from "react";
import EventList from "./components/EventList";
import SearchBar from "./components/SearchBar";
import "./styles/App.css";
import concertLights from "./images/concert-lights.jpeg"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <div className="app-background" style={{ backgroundImage: `url(${concertLights})` }}>
    
      </div>
      <div className="app">
      <SearchBar onSearch={handleSearch} />
      <EventList searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default App;
