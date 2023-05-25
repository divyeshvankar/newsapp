import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <>
      <div className="container bg-dark navbar-dark">
        <nav className="mx-3 navbar navbar-expand-lg navbar-dark bg-dark ">
        
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      
      
    </ul>
   
  </div>
    </nav>
    </div>
  </>
    );
  }
}

export default Navbar;
