import {breakpoint} from './loader';
const mainBlock = document.querySelector('.wrapper');
const audience = document.querySelector('.intro__audience');

const showAudience = () => {
  if (!audience) {
    return;
  }

  const toggleTabletAudience = (evt) => {
    if (evt.target.closest('.loader') === null && evt.target.closest('.loader__text-block') === null && evt.target.closest('.header__logo') === null) {
      audience.classList.toggle('intro__audience--show');
    }
  };

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      mainBlock.addEventListener('click', (toggleTabletAudience));
    } else {
      mainBlock.removeEventListener('click', (toggleTabletAudience));
      if (audience.classList.contains('intro__audience--show')) {
        audience.classList.remove('intro__audience--show');
      }
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {showAudience};
