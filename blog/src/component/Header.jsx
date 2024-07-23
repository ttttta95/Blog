import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <Link to="/Home" className='header__logo'>
                <h3>React Blog</h3>
            </Link>
            <nav className="header__menu">
                <Link to="/Write" className="header__link">글쓰기</Link>
                <Link to="/Posts" className="header__link">게시글</Link>
                <Link to="/Profile" className="header__link">프로필</Link>
            </nav>
        </header>
    );
}