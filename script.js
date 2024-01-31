class todoItem {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.timestamp = Date.now();
  }
}
let a = new todoItem("Detta är ett test", false, "2024-01-31 12:33");
console.log(a);

let form = document.querySelector(".new-todo");
let descriptionItem = document.querySelector(".description");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newTodo = new todoItem(descriptionItem.value);
  console.log(newTodo);
});
// let b = new todoItem("Detta är ett test 2", false, "2024-01-31 12:33");
// let c = new todoItem("Detta är ett test 3", false, "2024-01-31 12:33");
// let d = new todoItem("Detta är ett test 4", false, "2024-01-31 12:33");
// let e = new todoItem("Detta är ett test 5", false, "2024-01-31 12:33");
