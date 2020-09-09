import React, { useState, useEffect } from "react"

export const EventContext = React.createContext()

export const EventProvider = (props) => {
  const [events, setEvents] = useState([])

  const getEvents = () => {
    return fetch("http://localhost:8088/events")
      .then(res => res.json())
      .then(setEvents)
  }

  const addEvent = event => {
    return fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    })
      .then(getEvents)
  }

  const deleteEvent = event => {
    return fetch(`http://localhost:8088/events/${event.id}`, {
      method: "DELETE"
    })
      .then(getEvents)
  }


  const updateEvent = event => {
    return fetch(`http://localhost:8088/events/${event.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    })
      .then(getEvents)
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <EventContext.Provider value={{
      events, addEvent, deleteEvent, updateEvent
    }}>
      {props.children}
    </EventContext.Provider>
  )
}