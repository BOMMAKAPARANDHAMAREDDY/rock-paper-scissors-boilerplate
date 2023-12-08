const playElements = document.querySelector("#play-btn");

console.log(playElements);

playElements.onclick = () => {
  console.log(playElements);
  window.location.href = "./game.html";
};

