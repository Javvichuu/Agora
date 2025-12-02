import React from 'react';
import './Footer.css';
import logo from "../../assets/logo.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* CUATRO COLUMNAS EN UNA FILA */}
        <div className="footer-columns">
          
          {/* Columna 1: Logo y redes sociales */}
          <div className="footer-column">
            <div className="footer-logo">
              <img src={logo} alt="Logo Inmobiliaria" className="logo-img" />
            </div>
            
            <div className="social-media">
              <h4>Síguenos</h4>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook className="social-icon" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter className="social-icon" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="social-icon" />
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2: Información de contacto */}
          <div className="footer-column">
            <h4>Contacto</h4>
            <ul className="footer-list">
              <li className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+34 963 123 456</span>
              </li>
              <li className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@inmobiliariaagora.com</span>
              </li>
              <li className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>C/ Gran Vía, 123<br />46001 Valencia</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Enlaces rápidos */}
          <div className="footer-column">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-list">
              <li><a href="/">Inicio</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/propiedades">Qué nos diferencia?</a></li>
              <li><a href="/sobre-nosotros">Nuestro equipo</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div className="footer-column">
            <h4>Legal</h4>
            <ul className="footer-list">
              <li><a href="/politica-privacidad">Política de Privacidad</a></li>
              <li><a href="/aviso-legal">Aviso Legal</a></li>
              <li><a href="/cookies">Política de Cookies</a></li>
            </ul>
          </div>

        </div>

        {/* Línea divisoria */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Inmobiliaria Ágora. Todos los derechos reservados.</p>
            <p className="disclaimer">
              Esta web es propiedad de Inmobiliaria Ágora S.L. - CIF: B12345678
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;