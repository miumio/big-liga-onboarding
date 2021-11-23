const about = document.querySelector('.main-intro__about');
const body = document.querySelector('body');

const showAbout = () => {
  if (about) {
    body.addEventListener('click', () => {
      about.classList.toggle('main-intro__about--show');
    });
  }
};

export {showAbout};
