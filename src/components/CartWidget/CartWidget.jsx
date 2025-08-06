import "./carrito.css"
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext)
  return (
    <Link to="/cart" className="carritodiv" >
        <FaShoppingCart size={35} color="white"/>
        <h3 className="numero">{totalQuantity()}</h3>
    </Link>
  )
}

export default CartWidget