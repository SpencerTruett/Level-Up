import React, { useContext } from "react"
import { EventContext } from "./EventProvider"
import { Event } from "./Event"
import "./Event.css"

export const EventList = () => {
  const { events } = useContext(EventContext)

  return (
    <div className="events">
      {
        events.map(event => <Event key={event.id} event={event} />)
      }
    </div>
  )
}