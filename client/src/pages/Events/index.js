import React, { Component } from "react";
import EventPageEventsList from "../../components/EventPageEventsList";
import Spinner from "../../components/Spinner";
import "./style.css";
class EventPage extends Component {
  state = {
    events: []
  };
  componentDidMount() {
    // will hide the app_key
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const fullURL =
      "http://api.eventful.com/json/events/search?q=coding&keyword=tech&location=San+Francisco&date=Future&app_key=sg8mTm37KM4qW9Sv";

    fetch(proxyurl + fullURL, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(function(res) {
        return res.json();
      })
      .then(data => {
        console.log(data);

        this.setState({
          events: data.events.event
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.events.length > 1 ? (
          <EventPageEventsList events={this.state.events} />
        ) : (
          <div className="loading-page">
            <h3>Loading Events</h3>
            <Spinner />
          </div>
        )}
      </div>
    );
  }
}

export default EventPage;
