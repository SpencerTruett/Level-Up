import React, { useContext } from "react"
import { EventContext } from "./EventProvider"
import { Event } from "./Event"
import "./Event.css"

export default props => {
  const { events } = useContext(EventContext)

  return (
    <>
      <button onClick={() => props.history.push("/events/create")}>
        Add Event
      </button>
      <div className="events">
        {
          events.map(event => <Event key={event.id} event={event} />)
        }
      </div>
    </>
  )
}