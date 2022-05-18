import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contactanos } from './pages/Contactanos';
import { Proyectos } from './pages/Proyectos';
import { Blog } from './pages/Blog';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='home' element={<Home />}></Route>
            <Route path='blog' element={<Blog />}></Route>
            <Route path='contactanos' element={<Contactanos />}></Route>
            <Route path='proyectos' element={<Proyectos />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
