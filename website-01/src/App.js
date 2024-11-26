import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/Navbar';
import ETFPage from './pages/About';
import InsightPage from './pages/Insight';
import LoungePage from './pages/Lounge';
import CompanyPage from './pages/Company';

export default function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route to='About' element={<About />}></Route>
                <Route to='Insight' element={<Insight />}></Route>
                <Route to='Lounge' element={<Lounge />}></Route>
                <Route to='Lounge' element={<Company />}></Route>
                <Route></Route>
            </Routes>
        </Router>
    );
}