import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {
        //* Los fragments siempre van por afuera de todo!
      }
      <div className="App">
        <Navbar />
        <ItemListContainer greeting="Hola Mundo!!!" />
        <Footer />
      </div>
    </>
  );
}

export default App;
