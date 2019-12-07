import React from "react";
import "./style.css";
import images from "./EventImages";
const EventsPageEventsItem = ({ events }) => {
  console.log(events);
  return events.map((event, i) => (
    <div className="card event-item">
      <div className="card-body">
        {/* {event.image !== null ? (
          <img src={event.image.medium.url} height="200px" width="300px" />
        ) : (
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprivacypolicies.com%2Fblog%2Fwp-content%2Fuploads%2F2015%2F10%2Fcant-miss-tech-events-fi.png&f=1&nofb=1"
            height="200px"
            width="300px"
          />
        )} */}
        <img src={images[i]} height="200px" width="300px" />
        <p className="start-time">
          Start Time: {event.start_time.substring(0, 10)}
        </p>
        <h2 className="card-title">{event.title}</h2>
        {/* <p class="card-text">{event.description}</p> */}

        <h3 className="card-subtitle mb-2 text-muted">
          {event.city_name}, {event.region_abbr}
        </h3>

        <p className="event-address">
          {event.venue_name}, {event.venue_address}
        </p>
        <p className="card-text">
          <a href={event.url} target="_blank">
            <button className="more-info-btn">More Info</button>
          </a>
        </p>
      </div>
    </div>
  ));
};

export default EventsPageEventsItem;
