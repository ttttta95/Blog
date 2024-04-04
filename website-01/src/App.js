import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './page/About';
import Insight from './page/Insight';
import Lounge from './page/Lounge';
import Company from './page/Company';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/insight" element={<Insight />} />
                <Route path="/lounge" element={<Lounge />} />
                <Route path="/company" element={<Company />} />
            </Routes>
        </Router>
    );
}