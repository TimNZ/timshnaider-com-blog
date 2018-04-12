import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src="https://timshnaider.com/happy_logo_2.448f12be.png" alt="Tim Shnaider Logo" />
          </figure>
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://timshnaider.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          go to timshnaider.com
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
