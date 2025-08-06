import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteAllProducts } = useContext(CartContext)

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Tu carrito</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-lg text-center">El carrito está vacío.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((productCart) => (
                <div
                  key={productCart.id}
                  className="flex flex-col sm:flex-row items-center gap-6 p-4 border rounded-lg shadow-sm"
                >
                  <img
                    src={productCart.image}
                    alt={productCart.name}
                    className="w-40 h-40 object-cover rounded"
                  />
                  <div className="flex-1 space-y-1">
                    <p className="text-xl font-semibold">{productCart.name}</p>
                    <p className="text-gray-600">Precio unitario: ${productCart.price}</p>
                    <p className="text-gray-600">Cantidad: {productCart.quantity}</p>
                    <p className="text-indigo-600 font-medium">
                      Subtotal: ${productCart.price * productCart.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteProductById(productCart.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link to="/checkout">
                <button className="px-6 py-3 bg-green-200 rounded hover:bg-gray-300 text-gray-800">
                  Continuar mi compra
                </button>
              </Link>

              <button
                onClick={deleteAllProducts}
                className="px-6 py-3 bg-red-200 rounded hover:bg-gray-300 text-gray-800"
              >
                Vaciar carrito
              </button>

              <p className="text-2xl font-bold text-gray-800">
                Total: ${totalPrice()}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
