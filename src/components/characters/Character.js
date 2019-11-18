import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ photoUrl, name }) => {
  if(!photoUrl) photoUrl = './missing.png';
  
  return (
    <figure>
      <img src={photoUrl} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

Character.propTypes = {
  photoUrl: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Character;