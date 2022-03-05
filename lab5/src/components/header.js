import React from 'react'
import Button from 'react-bootstrap/Button';


export default function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="">IMDb</a>
    <div className="collapse navbar-collapse d-flex" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="">WishList</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}