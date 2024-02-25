import React from "react";
import "./Body.css";
import { motion } from "framer-motion";

const Body = () => {
  return (
    <section className="body-wrapper">
      <div className="paddings innerWidth flexCenter body-container">
        {/* Lado Izquierdo */}
        <div className="flexColStart body-left">
          <div className="body-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Descubre <br />
              un espacio <br />
              hecho para ti
            </motion.h1>
          </div>
          <div className="flexColStart body-description">
            <span>Encuentra una gran variedad de habitaciones</span>
            <span>Enfocadas en las necesidades de estudiantes</span>
          </div>
        </div>
        {/*Lado Derecho*/}
        <div className="flexCenter body-rigth">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="image-container"
          >
            <img src="./room-body.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Body;
