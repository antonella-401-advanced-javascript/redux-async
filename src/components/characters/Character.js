import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ photoUrl, name }) => (
  <figure>
    <img src={photoUrl} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);

Character.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Character;