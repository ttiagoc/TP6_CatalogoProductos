import logo from './logo.svg';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./components/Productos";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";

function App() {
  return (
<>   
  <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />}></Route>
	    <Route path="/productos" element={<Productos />}></Route>
	    <Route path="/nosotros" element={<Nosotros/>}></Route>
    <Route path="/contacto" element={<Contacto />}></Route>
       </Routes>
     </BrowserRouter>

</>
  );
}

export default App;
