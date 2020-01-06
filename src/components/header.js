import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

class Header extends Component {
  toogleMenu(event, id) {
    if (id && window.innerWidth > 600) {
      event.preventDefault();
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    }
    if (window.innerWidth <= 600) {
      document.getElementById("nav").style.display = window.isNavVisible ? "none" : "block";
      document.getElementById("cross").style.display = window.isNavVisible ? "none" : "block";
      document.getElementById("toggle").style.display = window.isNavVisible ? "block" : "none";
      document.getElementById("main").style.display = window.isNavVisible ? "block" : "none";
      window.isNavVisible = !window.isNavVisible;
    }
  }

  render() {
    return (
      <header>
        <div className="toggle" id="toggle" onClick={this.toogleMenu}></div>
        <nav id="nav">
          <div className="cross" id="cross" onClick={this.toogleMenu}></div>
          <ul>
            <li>
              <a href="#how-it-works" onClick={this.toogleMenu.bind('how-it-works')}>How it works</a>
            </li>
            <li>
              <a href="#get-in-touch" onClick={this.toogleMenu.bind('get-in-touch')}>Get in touch</a>
            </li>
            <li>
              <a href="#why-to-podcast" onClick={this.toogleMenu.bind('why-to-podcast')}>Why Podcast?</a>
            </li>
            <li>
              <Link to="insights" onClick={this.toogleMenu}>Insights</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }

}

export default Header
