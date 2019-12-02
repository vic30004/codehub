import React from "react";
import EventPageEventsItem from "../EventPageEventsItem";
const EventsPageEventsList = ({ events }) => {
  return (
    <div>
      <center>
        <h1>Event List</h1>
      </center>
      <div class="eventsList">
        <EventPageEventsItem events={events} />
      </div>
    </div>
  );
};

export default EventsPageEventsList;
