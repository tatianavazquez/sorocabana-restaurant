import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacto" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem'}}> Encontranos</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans"> 25 de Mayo 485 esquina Treinta y Tres, Ciudad Vieja, Montevideo, Uruguay.</p>
        <p className="p__cormorant" style={{color: '#DCCA87', margin: '2rem 0'}}> Horario </p>
        <p className="p__opensans"> Lunes a Viernes: 9:00hs - 18:30hs</p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus"/>
    </div>
  </div>
);

export default FindUs;
