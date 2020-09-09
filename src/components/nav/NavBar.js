import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
  return (
    <>
      {
        localStorage.getItem("levelup_member")
          ? <div className="logout__link">
            <li className="navbar__item">
              <Link className="navbar__link"
                to=""
                onClick={e => {
                  e.preventDefault()
                  localStorage.removeItem("levelup_member")
                  props.history.push("/")
                }}
              >Logout</Link>
            </li>
          </div>
          : ""
      }
      <ul className="nav__buttons">
        <li className="navbar">
          <Link className="navbar__link" to="/events">Events</Link>
        </li>
        <li className="navbar">
          <Link className="navbar__link" to="/chat">Chat</Link>
        </li>
      </ul>
    </>
  )
}