const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const liEl = document.querySelector("#ingredients");

const createList = ingredients.map((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  li.classList.add("item");
  return li;
});

liEl.append(...createList);
