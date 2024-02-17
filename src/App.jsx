import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/registro';                                                                                                                                                                                                                                                                                                                                                                                                                                         

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <h1>Crea una cuenta</h1>
      <Registro />
      </div>
    </>
  )
}

export default App
