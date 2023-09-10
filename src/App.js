import {useEffect, useState} from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';

function App () {
  // const [loading, setLoading] = useState (true);

  // useEffect (() => {
  //   setTimeout (() => {
  //     setLoading (false);
  //   }, 5000);
  // }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
