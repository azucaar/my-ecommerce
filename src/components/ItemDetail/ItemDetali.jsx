import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product = {} }) => {
  const { addProductInCart } = useContext(CartContext);
  const [EstaCarrito, setEstaCarrito] = useState(false);

  const addProduct = (quantity) => {
    const productCart = { ...product, quantity };
    addProductInCart(productCart);
    setEstaCarrito(true);
  };

  return (
    <div className="flex justify-center px-4 py-10 bg-white">
      <div className="flex flex-col lg:flex-row gap-10 max-w-5xl w-full items-start">
        <div className="w-full lg:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl shadow-md object-cover w-full max-h-[500px]"
          />
        </div>


        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-indigo-600 mb-1">${product.price}</p>
            <p className="text-sm text-gray-500 mb-6">Stock disponible: {product.stock}</p>
          </div>


          <div>
            {!EstaCarrito ? (
              <ItemCount stock={product.stock} addProduct={addProduct} />
            ) : (
              <Link to="/cart">
                <button className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-300 transition">
                  Ir al carrito
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
