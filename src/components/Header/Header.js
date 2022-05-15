import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css';

export const Header = () => {
  const colorOfLink = ({isActive}) => ({borderBottom: isActive ? '1px solid #DFD7E7FF' : 'none'});

  return (
    <nav className="Nav">
      <h1 className="Nav__heading" style={{display: "inline-block"}}>Rick & Morty</h1>
      <div className="Nav__container">
        <NavLink
          className="Nav__item"
          style={colorOfLink}
          to="/characters">All Characters List </NavLink>
        <span style={{color:'white'}}>|</span>
        <NavLink
          className="Nav__item"
          to="/favourite-characters"
          style={colorOfLink}> Your Favorite Characters
        </NavLink>
      </div>
    </nav>
  );
};