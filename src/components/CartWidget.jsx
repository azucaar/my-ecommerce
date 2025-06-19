import "./carrito.css"

import carrito from "../assets/carrito.png"

const CartWidget = () => {
  return (
    <div className="carritodiv">
        <img className="carrito" src={carrito} alt="" />
        <h3 className="numero">8</h3>
    </div>
  )
}

export default CartWidget