import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className='header__logo'>
                <h3>React Todos</h3>
            </Link>
            <nav className="header__menu">
                <Link to="/Write" className="header__link">Todo 생성</Link>
            </nav>
        </header>
    );
}