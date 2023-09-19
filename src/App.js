import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
import Layout from './pages/Layout';
import Contact from './pages/Contact';
import CategoriasProvider from './context/CategoriasContext';
import ProductsProvider from './context/ProductosContext';
import CarritoProvider from './context/CarritoContext';
import Carrito from './pages/Carrito';

function App() {
  return (
    <>

      <CategoriasProvider>
        <ProductsProvider>
      <CarritoProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/carrito" element={<Carrito />} />

              </Route>
            </Routes>
          </BrowserRouter>
          </CarritoProvider>
          </ProductsProvider>
        </CategoriasProvider>


    </>
  );
}

export default App;
