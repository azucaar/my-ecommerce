import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetaliContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {


  return (
    <BrowserRouter>
    <CartProvider>
    <div>
      <NavBar />
     <Routes>
      <Route path='/' element={ <ItemListContainer  />}/>
      <Route path='/category/:category' element={ <ItemListContainer  />}/>
      <Route path='/detail/:productId' element={ <ItemDetailContainer  />}/>
      <Route path='/cart' element={ <Cart />}/>
      <Route path='/checkout' element={ <Checkout />}/>
      <Route path='*' element={ <div>Error 404</div>}/>
      </Routes>
    </div>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
