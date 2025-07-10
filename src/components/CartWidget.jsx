import "./carrito.css"
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="carritodiv">
        <FaShoppingCart size={35} color="white"/>
        <h3 className="numero">8</h3>
    </div>
  )
}

export default CartWidget