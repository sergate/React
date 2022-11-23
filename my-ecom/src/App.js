import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <ItemDetailContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
