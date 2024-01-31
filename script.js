class todoItem {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.timestamp = Date.now();
  }
}
let a = new todoItem("Detta är ett test", false, "2024-01-31 12:33");

let form = document.querySelector(".new-todo");
let itemList = document.querySelector(".todo-list");
let descriptionItem = document.querySelector(".description");
console.log(itemList);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newTodo = new todoItem(descriptionItem.value);
  let art = document.createElement("article");
  art.setAttribute("class", "todo-article");
  art.innerText = newTodo.description;
  itemList.insertAdjacentElement("beforeend", art);
});
// let b = new todoItem("Detta är ett test 2", false, "2024-01-31 12:33");
// let c = new todoItem("Detta är ett test 3", false, "2024-01-31 12:33");
// let d = new todoItem("Detta är ett test 4", false, "2024-01-31 12:33");
// let e = new todoItem("Detta är ett test 5", false, "2024-01-31 12:33");
