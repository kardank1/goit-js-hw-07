function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor(event){
  const actualColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = actualColor;
  document.querySelector(".color").textContent = actualColor;
}


const changeColorButton = document.querySelector(".change-color");
changeColorButton.addEventListener("click", changeColor)
