import React from "react"
import { Link } from "react-router-dom"
import logo from "../cocktail2.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Link to="/">
          <img src={logo} alt="cocktail db logo" className="logo"></img>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
