import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Burger } from '../Assets/burger.svg';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" aria-label="GalaticoBurger - Home">
          <Burger />
        </Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
