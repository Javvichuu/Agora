import React from "react";
import acercaDe from "../../assets/AcercaDe.jpg";
import "./PorQueElegirnos.css";

const AcercaDe: React.FC = () => {
  return (
    <section className="elijenos-section">
      <div className="elijenos-container">
        <div className="elijenos-subContainer">
          <div className="elijenos-containerTitulo">
            <h2 className="elijenos-titulo">No vendemos pisos, vendemos sueños</h2>
          </div>
          <div className="elijenos-containerTexto">
            <div className="elijenos-texto">
              <p className="elijenos-descripcion">
                Desde el primer contacto hasta la
                conclusión del proceso de compra o venta, nos aseguramos de estar siempre disponibles para responder preguntas, proporcionar
                asesoramiento, y garantizar que nuestros clientes estén completamente satisfechos con nuestros servicios.
                <br /><br />
                Creemos en la transparencia y la honestidad en todos nuestros tratos, y nos esforzamos por brindar información precisa y
                actualizada sobre el mercado inmobiliario y las propiedades disponibles. También mantenemos una amplia red de contactos en
              </p>
            </div>

            <div className="elijenos-texto">
              <p className="elijenos-descripcion">
                el sector inmobiliario, lo que nos permite ofrecer a nuestros clientes una amplia gama de opciones y oportunidades de inversión.
                <br /><br />
                En resumen, nuestra empresa está dedicada a brindar a nuestros clientes una experiencia inmobiliaria excepcional, basada en la confianza, la atención personalizada
                y el conocimiento experto del mercado. Si está buscando comprar, vender o alquilar una propiedad, no dude en ponerse en contacto con nosotros. Estaremos encantados
                de ayudarle a alcanzar sus objetivos inmobiliarios.
              </p>
            </div>
          </div>
        </div>

        <div className="elijenos-imagen">
          <img src={acercaDe} alt="Team collaboration" />
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
