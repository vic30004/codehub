import React, { useEffect, useContext } from "react";
import EventPageEventsItem from "../EventPageEventsItem";
import AuthContext from "../context/auth/AuthContext";
import "./style.css";

const EventsPageEventsList = ({ events }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user, loadUser } = authContext;

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    }
  }, []);

  console.log(events);
  return (
    <div className="events-page-container">
      <center>
        <h1>Top Trending Tech Events</h1>
      </center>
      <div className="events-list">
        <EventPageEventsItem events={events} />
      </div>
    </div>
  );
};

export default EventsPageEventsList;
