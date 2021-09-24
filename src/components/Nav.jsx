// import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link className="home-link" to="/Home">Home</Link>
      <Link className="winners-link" to="/Winners">Winners</Link>
      <Link className="vote-link" to="/Start">Start</Link>
      <Link className='question-two' to='/Questiontwo'></Link>
    </div>
  );
};

export default Nav;