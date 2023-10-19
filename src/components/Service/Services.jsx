import React from "react";

import styled from "styled-components";

import { Slide } from "react-awesome-reveal";
import img from "../../Img/icons8-html-5-96.png";
import img1 from "../../Img/icons8-css3-96.png";
import img2 from "../../Img/icons8-react-native-96.png";
import img3 from "../../Img/icons8-mongodb-96.png";
import img4 from "../../Img/icons8-tailwindcss-96.png";
import img5 from "../../Img/icons8-javascript-96.png";
import img6 from "../../Img/icons8-express-js-96.png";
import img8 from "../../Img/icons8-nodejs-96.png";
import img9 from "../../Img/icons8-rest-api-96.png";
import img10 from "../../Img/icons8-github.gif";
import img11 from "../../Img/icons8-npm-96.png";
import img12 from "../../Img/icons8-bootstrap-96.png";
import img13 from "../../Img/icons8-critical-thinking.gif";
import img14 from "../../Img/icons8-visual-studio-96.png";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
      <div className="text-center mb-16">
        <h2>
         "What Skills I Have"
        </h2>
        <h2 className="text-2xl green"> My Skills </h2>
      </div>
      </Slide>
      <Slide direction="left" >
      <div className="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-11 gap-4 item-center ">
        <div className="flex justify-center items-center h-16 cursor-pointer w-16  rounded-full bg-white p-2 shadow-xl overflow-hidden relative">
          <img className="h-full w-full object-cover" src={img} alt="" />
          <div className="absolute bottom-0 font-bold left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
           HTML-5
          </div>
        </div>
        <div className="flex justify-center items-center h-16 cursor-pointer w-16 rounded-full bg-white p-2 shadow-xl overflow-hidden relative">
          <img className="h-full w-full object-cover" src={img1} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          CSS-3
          </div>
        </div>
        <div className="flex justify-center items-center h-16 cursor-pointer w-16 rounded-full bg-white p-2 shadow-xl overflow-hidden relative">
          <img className="h-full w-full object-cover" src={img12} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          BootStrap CSS
          </div>
        </div>
        <div className="flex justify-center items-center h-16 cursor-pointer w-16 rounded-full bg-white p-2 shadow-xl overflow-hidden relative">
          <img className="h-full w-full object-cover" src={img4} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-xs text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
         Tailwind CSS
          </div>
        </div>
        <div className="flex justify-center items-center h-16 cursor-pointer w-16 rounded-full bg-white p-2 shadow-xl overflow-hidden relative">
          <img className="h-full w-full object-cover" src={img5} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          Java Script
          </div>
        </div>
        <div className="flex justify-center items-center h-16 cursor-pointer w-16 rounded-full bg-white p-2 shadow-xl overflow-hidden relative">
          <img className="h-full w-full object-cover" src={img2} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
           React
          </div>
        </div>
        
        <div className="flex justify-center items-center h-16 cursor-pointer w-16 rounded-full bg-white p-2 shadow-xl overflow-hidden relative">
          <img className="h-full w-full object-cover" src={img3} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
         Mongo Db
          </div>
        </div>
       
     
        <div className="flex justify-center items-center h-16 cursor-pointer w-16 rounded-full bg-white p-2 shadow-xl overflow-hidden relative">
          <img className="h-full w-full object-cover" src={img6} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          Express Js
          </div>
        </div>
        <div className="flex justify-center items-center h-16 cursor-pointer w-16 rounded-full bg-white p-2 shadow-xl overflow-hidden relative">
          <img className="h-full w-full object-cover" src={img8} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          Node Js
          </div>
        </div>
        <div className="flex justify-center items-center h-16 cursor-pointer w-16 rounded-full bg-white p-2 shadow-xl overflow-hidden relative">
          <img className="h-full w-full object-cover" src={img9} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
         REST-API
          </div>
        </div>
        <div className="flex justify-center items-center h-16 cursor-pointer w-16 rounded-full bg-white p-2 shadow-xl overflow-hidden relative">
          <img className="h-full w-full object-cover" src={img10} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-xs text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          Github
          </div>
        </div>
        <div className="flex justify-center items-center h-16 cursor-pointer w-16 rounded-full bg-white p-2 shadow-xl overflow-hidden relative">
          <img className="h-full w-full object-cover" src={img11} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          NPM
          </div>
        </div>
        <div className="flex justify-center items-center h-16 cursor-pointer w-16 rounded-full bg-white p-2 shadow-xl overflow-hidden relative">
          <img className="h-full w-full object-cover" src={img14} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2  text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
        VS Code
          </div>
        </div>
        <div className="flex justify-center items-center h-16 cursor-pointer w-16 rounded-full bg-white p-2 shadow-xl overflow-hidden relative">
          <img className="h-full w-full object-cover" src={img13} alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-xs text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
           Leader ship
          </div>
        </div>
       
      </div>
      </Slide>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }
`;
