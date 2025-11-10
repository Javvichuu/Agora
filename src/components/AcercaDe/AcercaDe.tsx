import React from "react";
import acercaDe from "../../assets/AcercaDe.jpg";
import "./AcercaDe.css";

const AcercaDe: React.FC = () => {
  return (
    <section className="acerca-section">
      <div className="acerca-container">
        <div className="acerca-imagen">
          <img src={acercaDe} alt="Team collaboration" />
        </div>
        {/* Texto */}
        <div className="acerca-texto">
          <h2 className="acerca-titulo">Somos tu inmobiliaria de confianza</h2>
          <p className="acerca-descripcion">
           Nuestros clientes nos contratan para que pongamos lo mejor de nosotros mismos. Nuestra experiencia, nuestro marketing, nuestra capacidad de negociación, 
           nuestras herramientas, nuestros conocimientos del mercado inmobiliario, nuestra actitud, pero sobre todo nuestro corazón. El mundo lo han cambiado soñadores 
           como nosotros, y desde la marca Ágora Inmobiliaria y todos los que la formamos, hemos cambiado la forma de entender el mundo inmobiliario. La combinación de un 
           excelente equipo y los sistemas de trabajo más avanzados, permiten asesorar al cliente desde el inicio hasta el fin de la operación.
          
          <br/><br/>
            Disponemos de un equipo dinámico y experimentado, que le ofrecerá un servicio personalizado según sus prioridades y necesidades.
          
          <br/><br/>
            En Ágora Inmobiliaria le brindamos la oportunidad de adquirir su inmueble en las mejores condiciones del mercado, así como asesorarle a la hora de hacer una inversión como la compra de un inmueble porque sabemos lo importante que es para usted. No dude en visitarnos le atenderemos de una manera seria y rápida. 
          </p>

        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
