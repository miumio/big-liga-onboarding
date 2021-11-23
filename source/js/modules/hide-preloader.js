const preloader = document.querySelector('.preloader');
const main = document.querySelector('.main-intro__wrapper');

const hidePreloader = () => {
  if (preloader) {
    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 13) {
        evt.preventDefault();
        preloader.style.display = 'none';
        main.classList.add('animation-fade');
      }
    });
  }
};

export {hidePreloader};
