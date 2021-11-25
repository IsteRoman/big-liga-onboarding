const ENTER_CODE = 13;
const breakpoint = window.matchMedia('(max-width:1023px)');
const loader = document.querySelector('.loader');
const header = document.querySelector('header');
const main = document.querySelector('main');

const runLoaderWork = () => {
  if (!loader) {
    return;
  }

  const cloceLoader = () => {
    if (document.readyState !== 'loading') {
      loader.classList.add('hidden');
      header.classList.add('fadeInDown');
      main.classList.add('fadeInLeft');
    }
  };

  const cloceLoaderByEnter = (evt) => {
    if (evt.keyCode === ENTER_CODE) {
      cloceLoader();
    }
  };

  const breakpointCheckerLoader = () => {
    if (breakpoint.matches) {
      loader.addEventListener('click', (cloceLoader));
      window.removeEventListener('keydown', (cloceLoaderByEnter));
    } else {
      loader.removeEventListener('click', (cloceLoader));
      window.addEventListener('keydown', (cloceLoaderByEnter));
    }


  };
  breakpoint.addListener(breakpointCheckerLoader);
  breakpointCheckerLoader();
};

export {breakpoint};
export {runLoaderWork};
