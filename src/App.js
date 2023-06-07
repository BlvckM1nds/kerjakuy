import React from 'react';

import MainPage from './components/MainPage';
import LowonganPage from './components/LowonganPage';
import PageFooter from './components/Footer';
import DetailLowongan from './components/DetailLowongan';
import ListLowongan from './components/ListLowongan';
import About from './components/About';
import Nav from './components/Nav';

import { GlobalProvider } from './GlobalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
              <Route path='/' element={
                <Nav>
                  <MainPage/>
                </Nav>
              }/>
            <Route path='/job-vacancy' element={
              <Nav>
                <LowonganPage/>
              </Nav>
            }/>
            <Route path='/job-lists' element={
              <Nav>
                <ListLowongan/>
              </Nav>
            }/>
            <Route path='/job-detail/:Id' element={
              <Nav>
                <DetailLowongan/>
              </Nav>
            }/>
            <Route path='/about' element={
              <Nav>
                <About/>
              </Nav>
            }/>
          </Routes>
          <PageFooter/>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;