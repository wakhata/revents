import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";
import { useDispatch, useSelector } from "react-redux";

export default function EventDetailedPage({ match }) {
 // const dispatch = useDispatch();
  const event = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  //const { loading } = useSelector((state) => state.async);



  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
}
