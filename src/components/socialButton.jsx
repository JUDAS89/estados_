import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialButton = ({ icon, onClick }) => {
  return (
    <button className='btnRrss' onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default SocialButton;
