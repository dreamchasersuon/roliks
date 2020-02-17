import yall from 'yall-js';

document.addEventListener('DOMContentLoaded', () => {
  yall({
    observeChanges: true,
  });
});

document.addEventListener('scroll', () => {
  const scrollTrack = window.scrollY;
  const header = document.querySelector('.header');
  const headerStyle = header.style;

  if (scrollTrack > 100) {
    headerStyle.background = 'black';
  }
  headerStyle.background = 'transparent';
});
