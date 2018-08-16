import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class TopMenu extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand">Router</a>
        <ul className="nav navbar-nav">
          <li>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active">Products</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}