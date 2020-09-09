import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./event/EventList"
import { EventProvider } from "./event/EventProvider"

export const ApplicationViews = (props) => {
  return (
    <>
      <EventProvider>
        <Route exact path="/events">
          <EventList />
        </Route>
      </EventProvider>

      <Route path="/">
        {/* <List/> */}
      </Route>

    </>
  )
}