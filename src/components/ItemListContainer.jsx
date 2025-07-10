import useProducts from "../hooks/useProducts.js";
import Items from "./Items/Items";
import Loading from "./Loading/Loading";
import { useParams } from "react-router-dom";




const ItemListContainer = () => {
const {category} = useParams();
const {products,loading} = useProducts(category);

  return (
    <div>      
      {
      loading ? <Loading/> : <Items products={products}/>
      }   
    </div>
  )
}

export default ItemListContainer;