import { Link } from "react-router-dom";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        padding: "0.8rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: 0,
        width: "100vw",
        height: "4vw",
        left: 0,
        boxSizing: "border-box",
        zIndex: 1000,
      }}
    >
      {/* Contenedor interior */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img
            src="https://static.fotocasa.es/images/client/5a8c4671-8c44-468e-85b7-7c68247ff80c/20221103095211.jpeg?rule=original"
            alt="Logo Inmobiliaria"
            style={{display:"flex", height: "80px", alignContent:"center" }}
          />
        </div>

        {/* Menú centrado */}
        <nav style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "2rem",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: 500,
                }}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/servicios"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: 500,
                }}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="/diferencias"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: 500,
                }}
              >
                Qué nos diferencia?
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: 500,
                }}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botones de idioma */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginLeft: "1rem", // mismo margen visual que el padding del header
          }}
        >
          {/* Bandera España */}
          <button
            onClick={() => console.log("Idioma: Español")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <img
              src="https://flagcdn.com/w20/es.png"
              alt="Español"
              style={{  width: "40px", height: "25px", borderRadius: "2px" }}
            />
          </button>

          {/* Bandera Reino Unido */}
          <button
            onClick={() => console.log("Idioma: Inglés")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <img
              src="https://flagcdn.com/w20/gb.png"
              alt="English"
              style={{ width: "40px", height: "25px", borderRadius: "2px" }}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
