const ENTER_CODE = 13;
const MAX_TABLET_WIDTH = 1023;
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

const closeLoader = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const closeLoaderFunction = () => {
      const loaderBlock = document.querySelector('.loader');

      if (window.matchMedia(`(max-width: ${MAX_TABLET_WIDTH}px)`).matches) {
        loaderBlock.addEventListener('click', () => {
          loaderBlock.classList.add('hidden');
          header.classList.add('appirance-main-content');
          main.classList.add('appirance-main-content');
          footer.classList.add('appirance-main-content');
        });
      }
      window.addEventListener('keydown', (evt) => {
        if (evt.keyCode === ENTER_CODE) {
          loaderBlock.classList.add('hidden');
          header.classList.add('appirance-main-content');
          main.classList.add('appirance-main-content');
          footer.classList.add('appirance-main-content');
        }
      });
    };
    setTimeout(closeLoaderFunction, 2000);
  });
};

export {closeLoader};

