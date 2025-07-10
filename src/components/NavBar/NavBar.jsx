import "../NavBar/navbar.css"
import { GiStakeHammer } from "react-icons/gi";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <GiStakeHammer size={70} color="white"/>
        </Link>


        <ul className="categories">
            <li>
              <Link to="/category/taladro">Taladro</Link>
            </li>
            <li><Link to="/category/martillo">Martillo</Link></li>
            <li><Link to="/category/cortacesped">Corta Cesped</Link></li>
        </ul>
        <CartWidget/>
        </div>
  )
}

export default NavBar