import React from "react";

const EventsPageEventsItem = ({ events }) => {
  return events.map(event => (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{event.title}</h5>
        <p class="card-text">{event.description}</p>

        <h6 class="card-subtitle mb-2 text-muted">
          {event.city_name}, {event.region_abbr}
        </h6>
        {event.image !== null ? (
          <img src={event.image.medium.url} height="300px" width="400px" />
        ) : (
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprivacypolicies.com%2Fblog%2Fwp-content%2Fuploads%2F2015%2F10%2Fcant-miss-tech-events-fi.png&f=1&nofb=1"
            height="300px"
            width="400px"
          />
        )}
        <p class="card-text">
          <a href={event.url} target="_blank">
            <button>More Info</button>
          </a>
        </p>
      </div>
    </div>
  ));
};

export default EventsPageEventsItem;
s