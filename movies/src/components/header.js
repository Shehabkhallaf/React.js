import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/">IMDb</Link>
    <div className="collapse navbar-collapse d-flex" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/wishlist">WishList</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}