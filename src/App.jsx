import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetaliContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
    <div>
      <NavBar />
     <Routes>
      <Route path='/' element={ <ItemListContainer  />}/>
      <Route path='/category/:category' element={ <ItemListContainer  />}/>
      <Route path='/detail/:productId' element={ <ItemDetailContainer  />}/>
      
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
