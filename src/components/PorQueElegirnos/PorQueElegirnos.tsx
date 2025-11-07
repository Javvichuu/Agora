import React from "react";
import acercaDe from "../../assets/AcercaDe.jpg";
import "./PorQueElegirnos.css";

const AcercaDe: React.FC = () => {
  return (
    <section className="elijenos-section">
      <div className="elijenos-container">
        <div className="elijenos-imagen">
          <img src={acercaDe} alt="Team collaboration" />
        </div>
        {/* Texto */}
        <div className="elijenos-texto">
          <h2 className="elijenos-titulo">No vendemos pisos, vendemos sueños</h2>
          <p className="elijenos-descripcion">
           En nuestra empresa utilizamos tecnología de vanguardia para optimizar y fortalecer continuamente la calidad de 
           nuestros servicios. Somos una organización moderna, dinámica y plenamente adaptada a las exigencias del entorno 
           actual, lo que nos permite ofrecer a nuestros clientes soluciones innovadoras, eficientes y orientadas a resultados. Nuestro compromiso con la excelencia y la innovación nos impulsa a mantenernos a la vanguardia del sector, garantizando así un servicio de alto nivel y un acompañamiento profesional en cada proyecto.
          </p>

        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
