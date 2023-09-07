import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Layout from './pages/Layout';
import Contact from './pages/Contact';
import CategoriasProvider from './context/CategoriasContext';
import ProductsProvider from './context/ProductosContext';

function App() {
  return (
    <>

      <CategoriasProvider>
        <ProductsProvider>

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
    
          </ProductsProvider>
        </CategoriasProvider>


    </>
  );
}

export default App;
