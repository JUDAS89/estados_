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
  const [passwordError, setPasswordError]=useState(false)
  const [error, setError]=useState(false)

  const validarRegistro=(e)=>{
    e.preventDefault()

    let hasError=false

  if (nombre === '' || email === '' || password === '' || repassword === '') {
    showAlert("Completa todos los campos", "danger")
    hasError=true
  }

  if (password !== repassword) {
    showAlert("Las contraseñas no coinciden", "danger")
    hasError=true
  } 

  if (!hasError){
    showAlert("Registro exitoso", "success")
  }
  }

  return (
    <div className='form-group'>
    <Form onSubmit={validarRegistro}>
      
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

      <Button variant="success" type="submit" className='btnForm'>
        Registrarse
      </Button>
    </Form>
    </div>
  )
}

export default Formulario