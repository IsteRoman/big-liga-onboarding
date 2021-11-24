const MAX_TABLET_WIDTH = 1023;
const mainBlock = document.querySelector('.wrapper');
const loader = document.querySelector('.loader');
const logo = document.querySelector('.header__logo');
const audience = document.querySelector('.main-content__audience');

const showAudience = () => {
  if (window.matchMedia(`(max-width: ${MAX_TABLET_WIDTH}px)`).matches) {
    audience.classList.add('appirance-audience-block-tablet--back');
    mainBlock.addEventListener('click', (evt) => {
      if (evt.target !== logo && evt.target !== loader) {
        audience.classList.toggle('appirance-audience-block-tablet--forward');
        audience.classList.toggle('appirance-audience-block-tablet--back');
      }
    });
  }
};

export {showAudience};
