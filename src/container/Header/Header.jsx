import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Encuentra un nuevo sabor" />
      <h1 className="app__header-h1"> Una propuesta gastronómica con historia </h1>
      <p className="p__opensans" style={{ margin: '2rem 0', textTransform: 'none'}}> Ubicado en un punto estrátegico en la Ciudad Vieja, el Restaurante Sorocabana combina desayunos, almuerzos y meriendas, con toda la cultura e historia del entorno.</p>
      <button type="button" className="custom__button"> Explora el menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img"/>
      </div>

      
  </div>
);

export default Header;
