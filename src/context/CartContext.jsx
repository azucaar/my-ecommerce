import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

const addProductInCart = (newProduct) => {
  const existe = cart.findIndex((product) => product.id === newProduct.id);

  if (existe !== -1) {

    const updatedCart = [...cart];
    updatedCart[existe].quantity += newProduct.quantity;
    setCart(updatedCart);
  } else {

    setCart([...cart, newProduct]);
  }
};


    const totalQuantity = () => {
        const total = cart.reduce((total, product) => total + product.quantity, 0);
        return total;
    };

    const totalPrice = () => {
        const total = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
        return total;
    };

    const deleteProductById = (id) => {
        const productsFilter = cart.filter((product) => product.id !== id);
        setCart(productsFilter);
    }


        const deleteAllProducts = () => {
        setCart([]);
    }


    console.log(cart);
  return (
    <CartContext.Provider value={{cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteAllProducts }}>
        {children}
    </CartContext.Provider>
  )
};

export {CartContext, CartProvider}

