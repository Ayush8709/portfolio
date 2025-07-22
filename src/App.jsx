import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CarRental from './projects/CarRental';
import CoffeShop from './projects/CoffeShop';
import Ecommarce from './projects/Ecommarce';
import Resturant from './projects/ResturantMange';
import AiPlacement from './projects/AiPlacment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const NotFound = () => {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h2>404 - Page Not Found</h2>
    </div>
  );
};

const App = () => {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/carrental" element={<CarRental />} />
        <Route path="/coffeeshop" element={<CoffeShop />} />
        <Route path="/ecommerce" element={<Ecommarce />} />
        <Route path="/restaurant" element={<Resturant />} />
        <Route path="/aiplacement" element={<AiPlacement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
