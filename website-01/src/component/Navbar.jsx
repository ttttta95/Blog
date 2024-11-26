import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <h1>CapStack</h1>
            <ul>
                <li><Link to='/company'>회사소개</Link></li>
                <li><Link to="/insight">인사이트</Link></li>
                <li><Link to="/lounge">고객 라운지</Link></li>
                <li><Link to="/about">회사 소개</Link></li>
            </ul>
        </nav>
    );
}