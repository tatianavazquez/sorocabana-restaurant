import React from 'react';
import { FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding app__bg">
    <div className="app__footer-links">
    <div className="app__footer-links_contact">
      <h1 className="app__footer-headtext"> Contáctanos </h1>
      <p className="p__opensans"> 25 de Mayo 485 esquina Treinta y Tres, Ciudad Vieja, Montevideo, Uruguay. </p>
      <p className="p__opensans">  2915 2120</p>
      <p className="p__opensans"> 094 040 796 </p>
    </div>
    <div className="app__footer-links_logo">
     
     <img src={images.sorocabana} alt="footer_logo" className="sorocabana__img"/>
    
      <p className="p__opensans"> Ubicado en un punto estrátegico en la Ciudad Vieja, el Restaurante Sorocabana combina desayunos, almuerzos y meriendas, con toda la cultura e historia del entorno.</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: '15px'}}/>
      <div className="app__footer-links_icons">
        <FiFacebook />
        <FiMail />
        <FiInstagram />

      </div>
    </div>
    <div className="app__footer-links_work">
    <h1 className="app__footer-headtext"> Horario </h1>
      <p className="p__opensans"> Lunes a Viernes </p>
      <p className="p__opensans">  9:00hrs - 18:30hrs</p>
    </div>
  </div>
  <div className="footer__copyright">
    <p className="p__opensans"> 2022 Sorocabana. Todos los derechos reservados. </p>
  </div>
  </div>
 
);

export default Footer;
