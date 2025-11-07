import React from "react";
import acercaDe from "../../assets/AcercaDe.jpg";
import "./AcercaDe.css";

const AcercaDe: React.FC = () => {
  return (
    <section className="acerca-section">
      <div className="acerca-container">
        {/* Texto */}
        <div className="acerca-texto">
          <h2 className="acerca-titulo">Cómo trabajamos</h2>
          <p className="acerca-descripcion">
           En nuestra empresa utilizamos tecnología de vanguardia para optimizar y fortalecer continuamente la calidad de 
           nuestros servicios. Somos una organización moderna, dinámica y plenamente adaptada a las exigencias del entorno 
           actual, lo que nos permite ofrecer a nuestros clientes soluciones innovadoras, eficientes y orientadas a resultados. Nuestro compromiso con la excelencia y la innovación nos impulsa a mantenernos a la vanguardia del sector, garantizando así un servicio de alto nivel y un acompañamiento profesional en cada proyecto.
          </p>

        </div>
        <div className="acerca-imagen">
          <img src={acercaDe} alt="Team collaboration" />
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
