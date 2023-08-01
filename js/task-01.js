const items = document.querySelectorAll(".item");
console.dir("Number of categories: ${items.length}");

items.forEach(function (element) {
  console.log(`Category: ${element.firstElementChild.textContent}`),
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});
