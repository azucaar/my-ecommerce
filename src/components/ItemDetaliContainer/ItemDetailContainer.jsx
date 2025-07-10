import React from 'react'
import useProduct from '../../hooks/useProduct.js'
import Loading from '../Loading/Loading';
import ItemDetali from '../ItemDetail/ItemDetali.jsx';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const {productId} = useParams();

    const {product, loading} = useProduct(productId);

  return (
    <div>
        {
            loading ? <Loading/> : <ItemDetali product={product}/>
        }
        </div>
  )
}

export default ItemDetailContainer