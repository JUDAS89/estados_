import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/registro'; 
import Alert from './components/alert';                                                                                                                                                                                                                                                                                                                                                                                                                                  

function App() {
  const [alertInfo, setAlertInfo] = useState({ message: '', variant: '' });

  const showAlert = (message, variant) => {
    setAlertInfo({ message, variant });
  };
  return (
    <>
      <div className="App">
      <h1>Crea una cuenta</h1>
      <Alert message={alertInfo.message} variant={alertInfo.variant} />
      <Registro showAlert={showAlert} />
      </div>
    </>
  )
}

export default App
