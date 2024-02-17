import React from 'react'
import { Alert } from 'react-bootstrap';
import Formulario from './formulario';
import SocialButton from './socialButton';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import './style.css'

const Registro = ({ showAlert }) => {
  return (    
    <>
    <div className='cuerpoFormulario'>
    <div className='rrss'>
        <h2></h2>
        <SocialButton icon={faFacebookF} />
        <SocialButton icon={faTwitter} />
        <SocialButton icon={faGoogle} />
        <h4>O usa tu email para registrarte</h4>
      </div>
      <Formulario showAlert={showAlert} />
    </div>
    </>                                                                                                                                                                                                                                                                                                                                                     
  )
}

export default Registro;
