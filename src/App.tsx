import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AcercaDe from "./components/AcercaDe/AcercaDe";
import PorQueElegirnos from "./components/PorQueElegirnos/PorQueElegirnos";
import Estadisticas from "./components/Estadisticas/Estadisticas";
import Acoording from "./components/Acoording/Acoording";
import "./App.css"; // Asegúrate de tener este import

const App: React.FC = () => {
  return (
    <div >
      <div className="background" />
      <Navbar />
      <div className="content">

        <div className="hero-container">
          <section className="hero-text">
            <h1 className="hero-title">Inmobiliaria Ágora</h1>
            <p className="hero-subtitle">
              Empresa comprometida en ayudar a las personas a construir su futuro, a crear su nuevo hogar y a empezar su nueva vida. Trabajamos en Valencia y provincia
            </p>
          </section>
        </div>

        <main style={{ padding: "1rem" }}>
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/diferencias" element={<Diferencias />} />
            <Route path="/contacto" element={<Contacto />} /> */}
          </Routes>
        </main>
      </div>

      <div className="divider" />
      <Estadisticas />
      <div className="divider" />
      <div className="sections-container">

        <section className="section section-gray start-flat">
          <div className="section-inner">
            <PorQueElegirnos />
          </div>
        </section>

        <section className="section section-white end-flat">
          <div className="section-inner">
            <AcercaDe />
          </div>
        </section>
      </div>
      <div className="sections-container">
        <Acoording />
      </div>
    </div>
  );
};

export default App;
