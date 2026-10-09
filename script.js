const splash = document.getElementById('splash-screen');
const heading = document.querySelector('.hero h1');
const button = document.getElementById('helloButton');

heading.style.display = 'none';
button.style.display = 'none';

setTimeout(() => {
  splash.style.display = 'none';
  heading.style.display = 'block';
  button.style.display = 'inline-block';
}, 2000);

button.addEventListener('click', () => {
  window.location.href = 'page2.html';
});
