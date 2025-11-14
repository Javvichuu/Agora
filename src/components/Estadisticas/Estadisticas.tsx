import React from "react";
import AddHomeIcon from '@mui/icons-material/AddHome';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StarIcon from '@mui/icons-material/Star';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import "./Estadisticas.css";

const Estadisticas: React.FC = () => {
  return (
    <section className="estadisticas-section">
      <div className="estadisticas-container">
        
        <div className="estadistica-card">
          <AddHomeIcon className="icono" />
          <p className="numero">+150</p>
          <p className="texto">PROPIEDADES VENDIDAS</p>
        </div>

        <div className="estadistica-card">
          <WorkspacePremiumIcon className="icono" />
          <p className="numero">+5</p>
          <p className="texto">AÑOS EXPERIENCIA</p>
        </div>


        <div className="estadistica-card">
          <InsertEmoticonIcon className="icono" />
          <p className="numero">+500</p>
          <p className="texto">CLIENTES SATISFECHOS</p>
        </div>

        <div className="estadistica-card">
          <StarIcon className="icono" />
          <p className="numero">+140</p>
          <p className="texto">RESEÑAS POSITIVAS</p>
        </div>
      </div>
    </section>
  );
};

export default Estadisticas;
