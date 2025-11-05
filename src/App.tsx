import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "1rem" }}>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/diferencias" element={<Diferencias />} />
          <Route path="/contacto" element={<Contacto />} /> */}
        </Routes>
      </main>
    </>
  );
};

export default App;
