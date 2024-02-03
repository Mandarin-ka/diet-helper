import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Header.module.css';

function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <ul className={cl.nav__ul}>
          <li className='nav__li'>
            <Link to={'/'}>Главная</Link>
          </li>
          <li className='nav__li'>
            <Link to={'/products'}>Продукты</Link>
          </li>
          <li className='nav__li'>
            <Link to={'recepies'}>Рецепты</Link>
          </li>
          <li className='nav__li'>
            <Link to={'/favorites'}>Избранное</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
