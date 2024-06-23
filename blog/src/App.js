import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-ruoter-dom';
import Header from './component/Header';
import Write from './page/Write';
import Posts from './page/Posts';
import Profile from './page/Profile';

export default function App() {
    return (
        <Router>
          <Header />
          <Routes>
            <Route path='/write' element={<Write/>}></Route>
            <Route path='/posts' element={<Posts/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
          </Routes>
        </Router>
    );
}