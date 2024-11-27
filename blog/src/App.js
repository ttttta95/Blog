import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-ruoter-dom';
import Header from './component/Header';
import Write from './component/Write';
import Posts from './component/Posts';
import Profile from './component/Profile';

export default function App() {
    return (
        <Router>
          <Header />
          <Routes>
            <Route path='/write' element={<Write />}></Route>
            <Route path='/posts' element={<Posts />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
          </Routes>
        </Router>
    );
}