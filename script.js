const playElements = document.querySelector("#button-container");

console.log(playElements);

playElements.onclick = () => {
  console.log(playElements);
  window.location.href = "./game.html";
};

