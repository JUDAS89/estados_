import React from 'react'
import { Alert } from 'react-bootstrap';
import Formulario from './formulario';
import SocialButton from './socialButton';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Registro = () => {
  return (    
    <>
      <div>
        <h2></h2>
        <SocialButton icon={faFacebookF} />
        <SocialButton icon={faTwitter} />
        <SocialButton icon={faGoogle} />
        <h4>O usa tu email para registrarte</h4>
      </div>
      <Formulario/>
    </>                                                                                                                                                                                                                                                                                                                                                     
  )
}

export default Registro;
