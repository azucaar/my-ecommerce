import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {


  return (
    <div>
      <NavBar />
      <ItemListContainer saludo = { "Hola, esto es un mensaje con props!" } />
    </div>
  )
}

export default App
