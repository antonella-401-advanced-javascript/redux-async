import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ photoUrl, name }) => {
  if(!photoUrl) photoUrl = './missing.png';

  return (
    <figure className={styles.Character}>
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