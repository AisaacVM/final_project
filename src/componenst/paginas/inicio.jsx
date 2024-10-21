import React from "react";
import Carousel from "./carousel";
import Form1 from "../forms/form1";
import Footer from "../footer/footer";

const inicio = () => {
  return (
    <div>
      <Carousel></Carousel>
      <div className="container mb-5">
        <h1 className="text-center p-2">Bienvenido a Cat Bank!</h1>
        <figure>
          <blockquote className="blockquote">
            <p className="text-center mt-3">
              Con esta pagina pretendemos ayudar a nuestros usuarios a
              administrar sus gastos con el uso de nuestra amplia tecnologia en
              calculo la cual proveerá los mejores resultados para nuestros
              usuarios. Abajo podra registrarse y empezar con el proceso
            </p>
          </blockquote>
        </figure>
      </div>
      <Form1></Form1>
      <Footer></Footer>
    </div>
  );
};

export default inicio;
