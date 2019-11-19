import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.Head}>
      <Link to="/">Characters</Link>
    </header>
  );
};

export default Header;
