import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Importing components
import Add from './components/Admin/Add/Add';
import List from './components/Admin/List/List';
import Navbar from './components/Admin/Navbar/Navbar';
import Orders from './components/Admin/Orders/Orders';
import Sidebar from './components/Admin/Sidebar/Sidebar';
import Cart from './components/Cart/Cart';
import PlaceOrder from './components/Placeorder/PlaceOrder';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/admin/add" element={<Add />} />
          <Route path="/admin/list" element={<List />} />
          <Route path="/admin/navbar" element={<Navbar />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/sidebar" element={<Sidebar />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<PlaceOrder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
