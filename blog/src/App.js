import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Write from './page/Write';
import Posts from './page/Posts';
import Profile from './page/Profile';
import Home from './page/Home';

export default function App() {
    return (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Write" element={<Write />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Router>
    );
}