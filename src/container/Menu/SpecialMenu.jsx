import React from 'react';

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { menu } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
    <Document
      file={menu}
    >
      <Page pageNumber={1} />
      <Page pageNumber={2} />
      <Page pageNumber={3} />
      <Page pageNumber={4} />
      <Page pageNumber={5} />
      <Page pageNumber={6} />
    </Document>
  </div>
)};

export default SpecialMenu;
