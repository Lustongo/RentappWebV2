import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/*Lado izquierdo */}
        <div className="flexColStart f-left">
          <img src="./logo.png" alt="" width={150} />
          <span className="secondaryText">
            Nuesta vision es hacer que los estudiantes tengan <br />
            el mejor lugar para su estadia universitaria
            <br />
            Copyright &copy; 2023
          </span>
        </div>
        {/* Lado derecho*/}
        <div className="flexColStartf-rigth">
          <span className="primaryText">Informacion</span>
          <span className="secondaryText">
            <br />
            Blvd. Gral. Marcelino García Barragán 1421, Olímpica, 44430
            Guadalajara, Jal.
          </span>
          <div className="flexCenter f-menu">
            <span>Habitaciones</span>
            <span>Nosotros</span>
            <span>Contacto</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
