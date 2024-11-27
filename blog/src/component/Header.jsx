import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h2>React Blog</h2>
            <nav>
                <Link to="/write">글쓰기</Link>
                <Link to="/posts">게시글</Link>
                <Link to="/profile">프로필</Link>
            </nav>
        </header>
    );
}