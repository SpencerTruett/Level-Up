import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./event/EventProvider"
import EventList from "./event/EventList"
import EventForm from "./event/EventForm"
import { GameProvider } from "./game/GameProvider"

export const ApplicationViews = (props) => {
  return (
    <>
      <EventProvider>
        <GameProvider>
          <Route exact path="/events" render={
            props => <EventList {...props} />
          } />
          <Route exact path="/events/create" render={
            props => <EventForm {...props} />
          } />
        </GameProvider>
      </EventProvider>

    </>
  )
}