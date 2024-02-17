import React from 'react'
import { Alert } from 'react-bootstrap';
import Formulario from './formulario';
import SocialButton from './socialButton';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import './style.css'

const Registro = () => {
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
      <Formulario/>
    </div>
    </>                                                                                                                                                                                                                                                                                                                                                     
  )
}

export default Registro;
