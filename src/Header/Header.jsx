import React from 'react';
import {NavLink} from 'react-router-dom';

import './Header.css';

function Header(props) {
    return <div className='header'>
        <NavLink
            exact
            activeClassName='header__link--active'
            to='/'
            className='header__title'>
            Love Beers
        </NavLink>
        <nav className='header__nav'>
            <NavLink
                to='/favourites'
                activeClassName='header__link--active'
                className='header__link'>
                Favourites
            </NavLink>
        </nav>
    </div>;
}

export default Header;
