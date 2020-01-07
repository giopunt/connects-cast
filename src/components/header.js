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
        <button className="toggle" id="toggle" onClick={this.toogleMenu}></button>
        <nav id="nav">
          <button className="cross" id="cross" onClick={this.toogleMenu}></button>
          <ul>
            <li>
              <a href="#how-it-works" role="button" onClick={this.toogleMenu.bind('how-it-works')}>How it works</a>
            </li>
            <li>
              <a href="#get-in-touch" role="button" onClick={this.toogleMenu.bind('get-in-touch')}>Get in touch</a>
            </li>
            <li>
              <a href="#why-to-podcast" role="button" onClick={this.toogleMenu.bind('why-to-podcast')}>Why Podcast?</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }

}

export default Header
