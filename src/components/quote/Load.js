import React from 'react';
import PropTypes from 'prop-types';
import styles from './Load.css';

const Load = ({ fetchQuote }) => {
  return (
    <button className={styles.Load} onClick={fetchQuote} >New Quote</button>
  );
};

Load.propTypes = {
  fetchQuote: PropTypes.func.isRequired
};

export default Load;