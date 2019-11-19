import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import styles from './Characters.css';

const Characters = ({ characters }) => {
  const characterList = characters.map(character => (
    <li key={character._id}>
      <Character photoUrl={character.photoUrl} name={character.name}/>
    </li>
  ));

  return (
    <ul className={styles.Characters}>
      {characterList}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    photoUrl: PropTypes.string,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;