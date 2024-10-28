
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import eventsData from "../mockData";
import EventModal from "./EventModal";
import "../styles/EventList.css";

const EventList = ({ searchTerm }) => {
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const results = eventsData.filter(
      (event) =>
        event.name.toLowerCase().includes(searchTerm) ||
        event.location.toLowerCase().includes(searchTerm)
    );
    setFilteredEvents(results);
  }, [searchTerm]);

  const openModal = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="event-list">
      <h1>Discover Events Near You</h1>
      <div className="event-cards">
        {filteredEvents.map((event) => (
          <motion.div
            className="event-card"
            key={event.id}
            onClick={() => openModal(event)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2>{event.name}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </motion.div>
        ))}
      </div>
      {selectedEvent && <EventModal event={selectedEvent} onClose={closeModal} />}
    </div>
  );
};

export default EventList;
