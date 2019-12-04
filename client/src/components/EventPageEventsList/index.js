import React,{useEffect,useContext} from "react";
import EventPageEventsItem from "../EventPageEventsItem";
import AuthContext from "../context/auth/AuthContext";

const EventsPageEventsList = ({ events }) => {
  const authContext = useContext(AuthContext);
  const {isAuthenticated,user,loadUser} =authContext

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    }
  }, []);
  
  console.log(events)
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
