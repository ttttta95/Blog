import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Write from './page/Write';
import Posts from './page/Posts';
import Profile from './page/Profile';

export default function App() {
    return (
        <Router>
          <Header />
          <Routes>
            <Route path='/Write' element={<Write/>}></Route>
            <Route path='/Posts' element={<Posts/>}></Route>
            <Route path='/Profile' element={<Profile/>}></Route>
          </Routes>
        </Router>
    );
}