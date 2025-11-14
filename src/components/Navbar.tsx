import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/logo.jpg";

const Navbar: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        position: "sticky",
        top: 0,
        width: "100%",
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
          width: "100%",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img
            src={logo
            }
            alt="Logo Inmobiliaria"
            style={{ display: "flex", height: "60px", alignContent: "center" }}
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
                  color: "#ffffffff",
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
                  color: "#ffffffff",
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
                  color: "#ffffffff",
                  fontWeight: 500,
                }}
              >
                Qué nos diferencia?
              </Link>
            </li>
            <li>
              <Link
                to="/sobreNosotros"
                style={{
                  textDecoration: "none",
                  color: "#ffffffff",
                  fontWeight: 500,
                }}
              >
                Nuestro equipo
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                style={{
                  textDecoration: "none",
                  color: "#ffffffff",
                  fontWeight: 500,
                }}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
