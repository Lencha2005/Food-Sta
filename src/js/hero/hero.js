import Swiper from "swiper";
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';





let swiper = new Swiper('.swiper', {
    speed: 1000,
    modules: [Navigation, Keyboard, Mousewheel],
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev'
    },
    mousewheel: {
        enabled: true,
        invert: true,
        eventsTarget: '.swiper-wrapper'
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    breakpoints: {
    
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
    
        1280: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
  });