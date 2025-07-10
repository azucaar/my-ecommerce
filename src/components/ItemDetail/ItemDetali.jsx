import React from 'react'

const ItemDetali = ({product = {}}) => {
  return (
    <div>
        <img src={product.image} alt="" />
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>Quedan: {product.stock}</p>
    </div>
  )
}

export default ItemDetali