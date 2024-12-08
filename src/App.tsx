
import Greeting from './components/ItemListContainer/Greeting'
import NavBar from './components/NavBar/NavBar'

const miSaludo = "Bievenido a la tienda";

function App() {
  return(
    <>
      <NavBar/>
      <Greeting saludo={miSaludo} />
    </>
    
    
  )
  
}

export default App
