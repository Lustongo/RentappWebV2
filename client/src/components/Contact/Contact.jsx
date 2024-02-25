import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section id="Contact" className="flexColStart c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/*lado izquierdo*/}
        <div className="c-left">
          <span className="primaryText">Nuestro contacto</span>
          <span className="pinkText">Facil de contactarnos</span>
          <span className="secondaryText">
            <br/>Envianos un correo y te atenderemos
          </span>
          <div className="flexColStart contactOptions">
            {/*Modos contacto*/}
            <div className="flexStart row">
              <div className="flexColCenter option">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Llamanos</span>
                    <span className="secondaryText">33 33 33 33 33</span>
                  </div>
                </div>
                <div className="flexCenter button">Llamanos</div>
              </div>

              <div className="flexColCenter option">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Correo</span>
                    <span className="secondaryText">Envianos un correo</span>
                  </div>
                </div>
                <button className="flexCenter button" href>
                    <a href="mailto:modular.rentapp@gmail.com">Enviar correo</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*lado derecho*/}
        <div className="c-rigth">
          <div className="image-container">
            <img src="./contact.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
