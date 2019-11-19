import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.Head}>
      <Link to="/">Characters</Link>
      <Link to="/quotes">Simpsons Quotes</Link>
    </header>
  );
};

export default Header;
