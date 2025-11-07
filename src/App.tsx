import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AcercaDe from "./components/AcercaDe/AcercaDe";
import "./App.css"; // Asegúrate de tener este import

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fondo de imagen */}
      <div className="background"></div>

      {/* Contenido por encima del fondo */}
      <div className="content">
        <Navbar />
        <section className="hero-text">
          <h1 className="hero-title">Inmobiliaria Ágora</h1>
          <p className="hero-subtitle">Empresa comprometida en ayudar a las personas a construir su futuro, a crear
su nuevo hogar y a empezar su nueva vida. Trabajamos en Valencia y provincia</p>
        </section>
        <main style={{ minHeight: "80vh", padding: "1rem" }}>
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/diferencias" element={<Diferencias />} />
            <Route path="/contacto" element={<Contacto />} /> */}
          </Routes>
        </main>
      </div>

            <AcercaDe/>
    </div>
  );
};

export default App;
