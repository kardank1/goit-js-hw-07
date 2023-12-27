const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector("#controls").firstElementChild;

createButton.addEventListener("click", event => {
  if(input.value  > 0 && input.value < 101){
    createBoxes(input.value);
  }
});

destroyButton.addEventListener("click", event => {
  if(input.value  > 0 && input.value < 101){
    destroyBoxes(input.value);
  }
});


function destroyBoxes(){
  const childrenDiv = document.querySelector("#boxes").children;
  while(childrenDiv.length>0){
    childrenDiv[0].remove();
  }
}

function createBoxes(amount){
  destroyBoxes();
  const divBoxes = document.querySelector("#boxes");
  const div = [];
  let start = 20;
  for(let i = 0; i < amount; i++){
    div.push(document.createElement("div"))
    div[i].style.backgroundColor = getRandomHexColor();
    div[i].style.width = (i + 3) * 10 + "px";
    div[i].style.height = (i + 3) * 10 + "px";
  }
  divBoxes.append(...div)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
