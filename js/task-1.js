const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

const items = categories.children;
for(let item of items){
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
}

