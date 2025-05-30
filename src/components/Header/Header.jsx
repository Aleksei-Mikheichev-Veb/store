import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const basketCount = useSelector(state => state.basket.items.length);
    const favoritesCount = useSelector(state => state.favorites.items.length);

    const isActive = (path) => location.pathname === path;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header__container">
                <button
                    className="header__burger"
                    onClick={toggleMenu}
                    aria-label="Открыть меню"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}` }>
                    <NavLink
                        to="/"
                        className={`header__nav-link ${isActive('/products') ? 'active' : ''}`}
                        onClick={closeMenu}
                    >
                        Товары
                    </NavLink>

                    <NavLink
                        to="/favorites"
                        className={`header__nav-link ${isActive('/favorites') ? 'active' : ''}`}
                        onClick={closeMenu}
                    >
                        Избранное
                        {favoritesCount > 0 && (
                            <span className="header__badge">{favoritesCount}</span>
                        )}
                    </NavLink>

                    <NavLink
                        to="/basket"
                        className={`header__nav-link ${isActive('/basket') ? 'active' : ''}`}
                        onClick={closeMenu}
                    >
                        Корзина
                        {basketCount > 0 && (
                            <span className="header__badge">{basketCount}</span>
                        )}
                    </NavLink>
                </nav>

                {isMenuOpen && (
                    <div
                        className="header__overlay"
                        onClick={closeMenu}
                    ></div>
                )}
            </div>
        </header>
    );
};

export default Header;