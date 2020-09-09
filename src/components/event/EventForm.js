import React, { useContext, useState, useEffect } from "react"
import { EventContext } from "./EventProvider"
import { GameContext } from "../game/GameProvider"
import "./Event.css"

export default props => {
  const { event, addEvent, updateEvent, setEvent } = useContext(EventContext)
  const { games, getGames } = useContext(GameContext)


  const [editMode, editModeChanged] = useState(false)

  useEffect(() => {
    getGames()
  }, [])

  useEffect(() => {
    if ('id' in event) {
      editModeChanged(true)
    }
    else {
      editModeChanged(false)
    }
  }, [event])

  const handleControlledInputChange = (e) => {

    const newEvent = Object.assign({}, event)
    newEvent[e.target.name] = e.target.value
    setEvent(newEvent)
  }

  const createNewEvent = () => {
    const [a, b, alpha] = event.date.split("-")
    const [c, d] = alpha.split("T")
    const dateString = b + "-" + c + "-" + a + " " + d

    if (editMode) {
      updateEvent({
        id: event.id,
        title: event.title,
        text: event.text,
        date: event.date,
        memberId: parseInt(event.memberId),
        gameId: parseInt(event.gameId)
      })
    } else {
      addEvent({
        title: event.title,
        text: event.text,
        date: dateString,
        memberId: parseInt(localStorage.getItem("levelup_member")),
        gameId: parseInt(event.gameId)
      })
    }
    setEvent({ title: "", text: "", date: "", memberId: 0, gameId: 0 })
  }

  return (
    <form className="EventForm">
      <h2 className="EventForm__title">{editMode ? "Update Event" : "Create Event"}</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" required autoFocus className="form-control"
            proptype="varchar"
            placeholder="Title"
            value={event.title}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="text">Description: </label>
          <input type="text" name="text" required autoFocus className="form-control"
            proptype="varchar"
            placeholder="Description"
            value={event.text}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Date: </label>
          <input type="datetime-local" name="date" required className="form-control"
            proptype="varchar"
            placeholder=""
            value={event.date}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="gameId">Game: </label>
          <select name="gameId" className="form-control"
            proptype="int"
            value={event.gameId}
            onChange={handleControlledInputChange}>

            <option value="0">Select a game</option>
            {games.map(g => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button type="submit"
        onClick={evt => {
          evt.preventDefault()
          createNewEvent()
        }}
        className="btn btn-primary">
        {editMode ? "Update" : "Save"}
      </button>
    </form >
  )
}