import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

const Quote = ({ quote, character, image }) => {
  if(!image) image = './missing.png';
  const text = ' ' + '"' + quote + '"' + ' ' + '-' + ' ' + character;

  return (
    <>
      <div className={styles.Quote}>
        <img src={image} alt={character} />
        <p>{text}</p>
      </div>
    </>
  );
};

Quote.propTypes = {
  image: PropTypes.string,
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};

export default Quote;