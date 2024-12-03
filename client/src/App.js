import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import Login from './components/Login/Login';
import MyOrders from './pages/MyOrders/MyOrders';

function App() {

  const[login,setLogin] = useState(false);
  return (
    <>
    {login ? <Login setLogin={setLogin}/>:<></>}

    <div className="App">
      <Navbar setLogin = {setLogin}/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/cart" element={<Cart/>}/>
        <Route path = "/myorders" element={<MyOrders/>}/>
        <Route path = "/order" element={<PlaceOrder/>}/>
      </Routes>
    </div>

    <Footer/>
    </>
  );
}

export default App;
