import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link className="navbar__link" to="/logout">Logout</Link>
      </li>
    </ul>
  )
}