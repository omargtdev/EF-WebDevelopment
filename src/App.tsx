import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import MainNav from './components/MainNav';
import Products from './components/Products';
import Slider from './components/Slider';

function App() {
  return (
    <>
      <MainNav /> 
      <Routes>
          <Route path="/" element={
            <>
              <Slider />
              <Products />
            </>
          } />
          <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
