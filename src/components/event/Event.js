import React from "react"
import "./Event.css"

export const Event = ({ event }) => (
  <section className="event">
    <h3 className="event__name">{event.title}</h3>
    <h5 className="event__text">{event.text}</h5>
    <h5 className="event__date">{event.date}</h5>
  </section>
)