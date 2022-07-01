import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
} = images;

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,];


const Gallery = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  
  return (
  <div className="app__gallery flex__center">
    <div className="app__gallery-content">
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant"> Galería de fotos </h1>
      <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem'}}> Imágenes de nuestros deliciosos platos subidas a Instagram. Para seguirnos: @restaurantsorocabana</p>
      <button type="button" className="custom__button"> Ver más </button>
    </div>

    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {galleryImages.map((image, index) => (
          <div className="app__gallery-images-card flex__center" key={`gallery_image-${index + 1}`}> 
          <img src={image} alt="gallery"/>
          <BsInstagram className="gallery__image-icon" />
          </div>
        ) )}
      </div>
      <div className="app__gallery-images-arrows">
        <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
        <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
      </div>

    </div>
  </div>
)};

export default Gallery;
