import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';

import Layout from './components/Layout';
import Contact from './components/Contact';


function App() {
  return (
    <>
      
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
           
          </Route>
        </Routes>
      </BrowserRouter>




    </>
  );
}

export default App;
