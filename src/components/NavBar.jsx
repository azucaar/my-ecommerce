import "./navbar.css"
import EcommerceLogo from "../assets/ecommerce.jpg";
import CartWidget from "./CartWidget";


const NavBar = () => {
  return (
    <div className="navbar">
        <img className="logo" src={EcommerceLogo} alt="" />


        <ul className="categories">
            <li>Teclados</li>
            <li>Mouse</li>
            <li>Auriculares</li>
        </ul>
        <CartWidget/>
        </div>
  )
}

export default NavBar