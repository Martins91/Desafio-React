import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Burger } from '../Assets/burgerfooter.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Burger />
      <p>GalaticoBurger e todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
