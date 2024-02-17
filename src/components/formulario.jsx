import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useState} from 'react'
import './style.css'

const Formulario = ({ showAlert }) => {
  const [nombre, setNombre]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [repassword, setRepassword]=useState("")
  const [error, setError]=useState(false)
  const [passwordError, setPasswordError]=useState(false)

  const validarRegistro=(e)=>{
    e.preventDefault()

  if (nombre === '' || email === '' || password === '' || repassword === '') {
    setError(true);
    showAlert("No debes dejar campos vacíos", "danger");
    return;
  }
  if (password !== repassword) {
    setError(true);
    setPasswordError(true);
    showAlert("Las contraseñas no coinciden", "danger");
    return;
  }
  showAlert("Registro exitoso", "success");
  }

  return (
    <div className='form-group'>
    <Form onSubmit={validarRegistro}>
      {error&&<p className="error">{passwordError?"Las contraseñas no coinciden":"No debes dejar campos vacios"}</p>}
      
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="tuemail@ejemplo.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicRepassword">
        <Form.Control type="password" placeholder="Confirma tu contraseña" value={repassword} onChange={(e)=>setRepassword(e.target.value)}/>
      </Form.Group>

      <Button variant="success" type="submit">
        Registrarse
      </Button>
    </Form>

    </div>
  )
}

export default Formulario