import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="text-white py-4 bg-dark ">
        <div className="container mt-4">
          <nav className="row">
            <Link
              to="/inicio.jsx"
              className="col-12 col-md-3 d-flex aling-items-center justyfy-content-center"
            >
              <img
                src="public/img/logo.jpg"
                alt=""
                className="mx-2"
                width="150px"
              />
            </Link>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weight-bold mb-2 text-center">Extra</li>
              <li className="text-center">
                esta pagina está en fase experimental, por el momento solo
                pretende ser un boceto para un proyecto
              </li>
            </ul>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weight-bold mb-2 text-center">Enlaces</li>
              <li className="text-center">
                <Link to="/inicio.jsx" className="text-reset">
                  Inicio
                </Link>
              </li>
              <li className="text-center">
                <Link to="/gastos.jsx" className="text-reset">
                  Gastos
                </Link>
              </li>
            </ul>
            <div className="container">
              <p className="text-center">
                Realizado por Isaac Vélez, Julian, Gustavo
              </p>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
