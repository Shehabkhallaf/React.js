import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cnt = useSelector((state) => state.Favourite.count);

     return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          IMDb
        </Link>
        <div className="collapse navbar-collapse d-flex" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <li className="nav-item">
            <NavLink to="/Favourite" style={isActive => ({color: isActive ? "white" : "gray",background:isActive?"green":""})} className="navbar-brand fs-4" >Favourite<i className="ps-3 text-warning fa-solid fa-star"></i><span className='text-white ps-3'>{cnt}</span></NavLink>
          </li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}
