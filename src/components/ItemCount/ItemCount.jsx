import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, addProduct}) => {
const [count, setCount] = useState(1);
const handleClickDecrement=()=>{
    if(count >1){
        setCount (count -1);
    }
};

const handleClickIncrement = () =>{
    setCount(count +1);
};

  return (
<div className="flex items-center gap-6 mt-4">
  <button
    onClick={handleClickDecrement}
    className="text-2xl px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
  >
    -
  </button>
  <p className="text-2xl font-semibold">{count}</p>
  <button
    onClick={handleClickIncrement}
    className="text-2xl px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
  >
    +
  </button>
  <button onClick={() => addProduct(count)}
    className="ml-4 text-lg px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
    Añadir al carrito
  </button>
</div>


  )
}

export default ItemCount