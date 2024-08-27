import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Write from './page/Write';
import Home from './page/Home';

export default function App() {
    return (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Write" element={<Write />} />
          </Routes>
        </Router>
    );
}