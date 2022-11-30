import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/index";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./context/CartContext";


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
					<Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
				</Routes>
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;
