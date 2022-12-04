import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/index";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./context/CartContext";
import './App.css';


function App() {
  return (
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;
