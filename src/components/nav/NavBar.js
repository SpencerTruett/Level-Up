import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
  return (
    <>
      <ul className="navbar">
        <li className="navbar__item">
          <Link className="navbar__link" to="/logout">Logout</Link>
        </li>
      </ul>
      <ul>
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