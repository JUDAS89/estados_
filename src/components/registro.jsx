import React from 'react'
import { Alert } from 'react-bootstrap';
import Formulario from './formulario';
import SocialButton from './socialButton';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import './style.css'

const Registro = ({ showAlert }) => {
  return (    
    <>
    <div className='rrss'>
      <div className='btnR'>
        <SocialButton icon={faFacebookF}/>
        <SocialButton icon={faTwitter}/>
        <SocialButton icon={faGoogle}/>
      </div>
        <h5>O usa tu email para registrarte</h5>
      </div>
      <Formulario showAlert={showAlert} />
    </>                                                                                                                                                                                                                                                                                                                                                     
  )
}

export default Registro;
