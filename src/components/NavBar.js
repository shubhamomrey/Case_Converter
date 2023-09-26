import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavBar(props) {
 
  return (
    <>
      <nav className={`navbar border navbar-expand-lg navbar-${props.mode} 2 bg-${props.mode}`}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
            {/* <div style={{width: 200,display: "flex", alignItems: "center"}} className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light' ? 'Dark Mode' : 'Light Mode'}`</label>
</div> */}
            <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode("primary")}} style={{height:30, width:30, cursor: "pointer"}}> </div>
              <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode("danger")}} style={{height:30, width:30, cursor: "pointer"}}> </div>
              <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode("success")}} style={{height:30, width:30, cursor: "pointer"}}> </div>
              <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode("warning")}} style={{height:30, width:30, cursor: "pointer"}}> </div>
              <div className="bg-light rounded mx-2 border border-dark" onClick={()=>{props.toggleMode("light")}} style={{height:30, width:30, cursor: "pointer"}}> </div>
              <div className="bg-dark rounded mx-2 border border-light" onClick={()=>{props.toggleMode("dark")}} style={{height:30, width:30, cursor: "pointer"}}> </div>
            </div>
          
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

NavBar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

NavBar.defaultProps = {
  title: "Home page",
  about: "About",
};
