import React from "react";
import "./style.css";

const EventsPageEventsItem = ({ events }) => {
  console.log(events);
  return events.map(event => (
    <div className="card event-item">
      <div className="card-body">
        <h2 className="card-title">{event.title}</h2>
        {/* <p class="card-text">{event.description}</p> */}

        <h3 className="card-subtitle mb-2 text-muted">
          {event.city_name}, {event.region_abbr}
        </h3>
        {event.image !== null ? (
          <img src={event.image.medium.url} height="200px" width="300px" />
        ) : (
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprivacypolicies.com%2Fblog%2Fwp-content%2Fuploads%2F2015%2F10%2Fcant-miss-tech-events-fi.png&f=1&nofb=1"
            height="200px"
            width="300px"
          />
        )}
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
