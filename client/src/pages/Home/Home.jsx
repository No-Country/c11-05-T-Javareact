import "./home.css";
import React from "react";
import images from "../../exports/images";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-full bg-white w-full">
      {/*Barra de navegacion*/}
      <div className="div-input h-16 m-auto mt-32">
        <i class="lupita-input fa-solid fa-magnifying-glass"></i>
        <input
          className="input-home w-9/12 h-full bg-transparent"
          type="text"
          placeholder="Buscar servicios y profecionales"
        />
        <div className="lineas linea-1"></div>
        <div className="lineas linea-2"></div>
        <div className="lineas linea-3"></div>
      </div>

      {/* descripcion */}
      <div className=" div-container__description w-11/12">
        <div className="div-container__titulo">
          <h1 className="titulo-home">Todos los Servicios en un solo lugar</h1>
          <p className="text-xl text-gray-400 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            doloremque voluptatum quibusdam illum voluptatibus maiores
            reiciendis dignissimos dolore, vero omnis necessitatibus
          </p>
          <button className="button-explorar">Explorar</button>
        </div>
        <div className="div-container__img">
          <img
            className="h-full w-full rounded-3xl"
            src="https://picsum.photos/200/300"
            alt=""
          />
        </div>
      </div>

      {/* Carrusel de fotos */}
      <motion.div className="container-carrusel">
        <motion.div className="carrusel" drag='x' dragConstraints={{right: 0, left:-2140}} >
          {images.map((image) => (
            <motion.div className="item">
              <img src={image} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Trabaja con nosotros */}

      <div className=" div-container__description w-11/12">
        <div className="div-container__img">
          <img
            className="h-full w-full rounded-3xl"
            src="https://picsum.photos/200/300"
            alt=""
          />
        </div>
        <div className="div-container__titulo">
          <h1 className="titulo-home">Trabaja con<br />nosotros</h1>
          <p className="text-xl text-gray-400 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            doloremque voluptatum quibusdam illum voluptatibus maiores
            reiciendis dignissimos dolore, vero omnis necessitatibus
          </p>
          <button className="button-trabaja">Registrarme como profecional</button>
        </div>
      </div>

      {/* Testimonios */}
      <h2 className="titulo-testimonios" >Testimonios</h2>
      <motion.div className="container-carrusel__dos">
        <motion.div className="carrusel__dos" drag='x' dragConstraints={{right: 0, left:-2140}} >
          {images.map((image) => (
            <motion.div className="item__dos">
              <img src={image} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Home;
