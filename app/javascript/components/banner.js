import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["So much more than just a drink"],
    typeSpeed: 50,
    loop: true
  });
};

export { loadDynamicBannerText };
