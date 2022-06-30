import React from 'react';

import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">
            Sobre Nosotros
        </h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img" />
        <p className="p__opensans"> Fundado en 1939 con el café como producto protagónico y de excelencia, vuelve en el 2019 con una nueva propuesta gastronómica de almuerzos y meriendas, manteniendo la identidad de siempre con la actualidad. </p>
        <button type="button" className="custom__button"> Saber más </button>
      </div>

    <div className="app__aboutus-content_knife flex__center">
      <img src={images.knife} alt="about_knife"/>
    </div>

    <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">
            Historia
        </h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img" />
        <p className="p__opensans"> Fundado en 1939 con el café como producto protagónico y de excelencia, vuelve en el 2019 con una nueva propuesta gastronómica de almuerzos y meriendas, manteniendo la identidad de siempre con la actualidad. </p>
        <button type="button" className="custom__button"> Saber más </button>
      </div>

    </div>
  </div>
);

export default AboutUs;
