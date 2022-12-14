import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Policy from './components/Policy';
import Error from './components/Error';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
