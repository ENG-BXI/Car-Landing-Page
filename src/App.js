import React, {useEffect} from 'react';
import HomePage from './Page/HomePage/HomePage';
import scrollreveal from '../node_modules/scrollreveal/dist/scrollreveal';
var slideUp = {
  distance: '50px',
  origin: 'top',
  duration: '2500',
  opacity: 0
};
const App = () => {
  useEffect(() => {
    scrollreveal().reveal('.hero h2', slideUp);
    scrollreveal().reveal('.hero h3', {...slideUp, delay: '200'});
    scrollreveal().reveal('.hero>p , .hero .HeroImage , .white-car ,.featured-cars', {...slideUp, delay: '500'});
    scrollreveal().reveal('.hero .info-card:nth-child(1)  , .popular .swiper-cars ', {...slideUp, delay: '500', origin: 'bottom'});
    scrollreveal().reveal('.hero .info-card:nth-child(2) ', {...slideUp, delay: '700', origin: 'bottom'});
    scrollreveal().reveal('.hero .info-card:nth-child(3),.hero .start-circle ', {...slideUp, delay: '900', origin: 'bottom'});
    scrollreveal().reveal('.about-image-cover ,.offer-data', {...slideUp, origin: 'left'});
    scrollreveal().reveal('.about-data,.offer img', {...slideUp, origin: 'right'});
    scrollreveal().reveal('.feature-image-card-1 ', {...slideUp, delay: '800'});
    scrollreveal().reveal('.feature-image-card-2 ', {...slideUp, delay: '1200'});
    scrollreveal().reveal('.feature-image-card-3 ', {...slideUp, delay: '1500'});
    scrollreveal().reveal('.companies-logo:nth-child(1) ,footer div:nth-child(1)', {...slideUp, distance: '40px'});
    scrollreveal().reveal('.companies-logo:nth-child(2),footer div:nth-child(2)', {...slideUp, delay: 300, distance: '40px'});
    scrollreveal().reveal('.companies-logo:nth-child(3),footer div:nth-child(3)', {...slideUp, delay: 500, distance: '40px'});
    scrollreveal().reveal('.companies-logo:nth-child(4) ,footer div:nth-child(4)', {...slideUp, delay: 700, distance: '40px'});
    scrollreveal().reveal('.companies-logo:nth-child(5)', {...slideUp, delay: 900, distance: '40px'});
    scrollreveal().reveal('.companies-logo:nth-child(6)', {...slideUp, delay: 1200, distance: '40px'});
  });
  return <HomePage />;
};

export default App;
