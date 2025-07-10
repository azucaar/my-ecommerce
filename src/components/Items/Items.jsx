import "../Items/Items.css"
import React from 'react'
import { Link } from "react-router-dom"

const Items = ({ products = [] }) => {
  return (
    <div className="bg-dark cartastot">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Nuestros Artículos:</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md cartas">
              
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-43 object-contain rounded-md bg-white"
                />
              </div>

              <div className="p-6">
                <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {product.name}
                </h5>
                <p className="text-base font-light leading-relaxed text-inherit">
                  {product.description}
                </p>
              </div>

              <div className="p-6 pt-0 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">${product.price}</span>
                <Link to={`/detail/${product.id}`}>
                  <button
                    type="button"
                    className="rounded-lg bg-blue-500 py-2 px-4 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg"
                  >
                    Más información
                  </button>
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
