import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
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
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
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
