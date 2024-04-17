import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h3>React Blog</h3>
            <nav>
                <Link to="/Write">글쓰기</Link>
                <Link to="/Posts">게시글</Link>
                <Link to="/Profile">프로필</Link>
            </nav>
        </header>
    );
}