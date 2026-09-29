document.querySelector("#helloButton").addEventListener("click", () => {
  alert("Ласкаво просимо!");
});
window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-screen');
  setTimeout(() => {
    splash.classList.add('fade-out');
  }, 2500);
});
