import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import FullCard from './pages/FullCard/FullCard';
import Visuart from './pages/Visuart/Visuart';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullCard/:id" element={<FullCard />} />
        {/* <Route path="/Visuart" element={<Visuart />} /> */}   
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
