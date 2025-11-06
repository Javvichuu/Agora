import React from "react";
import acercaDe from "../../assets/AcercaDe.jpg";
import "./AcercaDe.css";

const AcercaDe: React.FC = () => {
  return (
    <section className="acerca-section">
      <div className="acerca-container">
        {/* Texto */}
        <div className="acerca-texto">
          <h2 className="acerca-titulo">Como surgió Ágora?</h2>
          <p className="acerca-descripcion">
            Inmobiliaria Ágora surgió de un pensamiento de una gran amistad y de un punto clave que dio el empujón a hacer realidad esto 
            que tanto tiempo habíamos imaginado.
          </p>
          <p className="acerca-descripcion">
           Te preguntarás ¿y por qué nosotros? Por qué lo más importante para que algo como inmobiliaria Ágora funcione es tener un 
           buen equipo y nosotros podemos presumir del gran equipo que formamos, la positividad, el respeto, trabajar unidos, 
           la comunicación, mejores amigos y por supuesto la diversión, todos estos puntos son clave para que algo así funcione.
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
