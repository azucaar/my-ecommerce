import React, { useEffect } from 'react'
import useProduct from '../../hooks/useProduct.js'
import Loading from '../Loading/Loading';
import ItemDetali from '../ItemDetail/ItemDetali.jsx';
import { useParams, useNavigate } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const { product, loading } = useProduct(productId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!product || !product.name)) {
      navigate('/404');
    }
  }, [loading, product, navigate]);

  return (
    <div>
      {loading ? <Loading /> : <ItemDetali product={product} />}
    </div>
  );
};

export default ItemDetailContainer;