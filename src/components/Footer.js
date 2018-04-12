import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.svg'

const Footer = () => (
    <div style={{margin: '0 1rem',display: 'flex',alignItems: 'center'}}>
      <div>
        Copyright Tim Shnaider
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
  
)

export default Footer
