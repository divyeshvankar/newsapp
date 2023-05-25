import React, { Component } from "react";
import {
  
  Link
} from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <>
      <div className="container bg-dark navbar-dark">
        <nav className="mx-3 navbar navbar-expand-lg navbar-dark bg-dark ">
        
  <Link className="navbar-brand" to="/">NewsMonkey</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link className="nav-Link btn btn-dark" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-Link btn btn-dark" to="/business">business</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-Link btn btn-dark" to="/entertainment">entertainment</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-Link btn btn-dark" to="/general">general</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-Link btn btn-dark" to="/health">health</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-Link btn btn-dark" to="/science">science</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-Link btn btn-dark" to="/sports">sports</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-Link btn btn-dark" to="/technology">technology</Link>
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
