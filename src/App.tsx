import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AcercaDe from "./components/AcercaDe/AcercaDe";
import PorQueElegirnos from "./components/PorQueElegirnos/PorQueElegirnos";
import Estadisticas from "./components/Estadisticas/Estadisticas";
import Acoording from "./components/Acoording/Acoording";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      {/* Navbar fijo que está siempre visible */}
      <Navbar />
      
      {/* Contenedor para el fondo y hero */}
      <div className="app-container">
        <div className="background" />
        <div className="content">
          <div className="hero-container">
            <section className="hero-text">
              <h1 className="hero-title">Inmobiliaria Ágora</h1>
              <p className="hero-subtitle">
                Empresa comprometida en ayudar a las personas a construir su futuro, 
                a crear su nuevo hogar y a empezar su nueva vida. 
                Trabajamos en Valencia y provincia
              </p>
            </section>
          </div>

          <main>
            <Routes>
              {/* <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/diferencias" element={<Diferencias />} />
              <Route path="/contacto" element={<Contacto />} /> */}
            </Routes>
          </main>
        </div>
      </div>

      {/* Resto del contenido (fuera del fondo) */}
      <div style={{ background: 'white' }}>
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
        
        {/* Contenedor para el acordeón con fondo blanco */}
        <div className="acordion-container">
          <Acoording />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default App;