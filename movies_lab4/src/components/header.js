import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("0");
  
  const activateLink = (e) =>{

      switch(e.target.innerText){
          case "Home":
              setActive("0");
          break;
          case "Favorite":
              setActive("1");
          break;
          case "Login":
              setActive("2");
          break;
          case "Register":
              setActive("3");
          break;
          default:
              setActive("");
          break;
      }
    }
     return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          IMDb
        </Link>
        <div className="collapse navbar-collapse d-flex" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to={"/favorites"}
                onClick={(e) => activateLink(e)}
                className={`nav-link ${
                  active === "1" ? "border-bottom border-danger border-2" : ""
                }`}
              >
                Favorite
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}
