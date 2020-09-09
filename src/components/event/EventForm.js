import React, { useContext, useRef } from "react"
import { EventContext } from "./EventProvider"
import "./Event.css"

export default props => {
  const { addEvent } = useContext(EventContext)
  const title = useRef("")
  const text = useRef("")
  const date = useRef("")
  const event = useRef(0)

  const createNewEvent = () => {
    const eventId = parseInt(event.current.value)
    const [a, b, c] = date.current.value.split("-")
    const dateString = b + "-" + c + "-" + a

    if (eventId === 0) {
      window.alert("Please select an event")
    } else {
      addEvent({
        title: title.current.value,
        text: text.current.value,
        date: dateString,
        memberId: parseInt(localStorage.getItem("levelup_member"))
      })
        .then(() => props.history.push("/events"))
    }
  }

  return (
    <form className="eventForm">
      <h2 className="eventForm__title">New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="eventTitle">Event title: </label>
          <input
            type="text"
            id="eventTitle"
            ref={title}
            required
            autoFocus
            className="form-control"
            placeholder="Event title"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="eventTitle">Event description: </label>
          <input
            type="text"
            id="eventText"
            ref={text}
            required
            autoFocus
            className="form-control"
            placeholder="Event description"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="eventTitle">Event date: </label>
          <input
            type="date"
            id="eventText"
            ref={date}
            required
            autoFocus
            className="form-control"
          />
        </div>
      </fieldset>

      <button type="submit"
        onClick={
          evt => {
            evt.preventDefault()
            createNewEvent()
          }
        }
        className="btn btn-primary">
        Save Event
            </button>
    </form>
  )
}