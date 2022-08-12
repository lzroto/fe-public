// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Banner = () => {
  return(
    <img 
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      marginTop: 20
    }}
    src={`${process.env.PUBLIC_URL}/assets/img/welcomaboard.png`}  alt="Image 1"/>
  )
}

export {
  Banner
};
