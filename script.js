class todoItem {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.timestamp = new Date();
  }
}

let form = document.querySelector(".new-todo");
let itemList = document.querySelector(".todo-list");
let descriptionItem = document.querySelector(".description");

postExamples();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newTodo = new todoItem(descriptionItem.value);
  postTodoItem(newTodo);
});

function postTodoItem(todoItem) {
  let art = document.createElement("article");
  art.setAttribute("class", "todo-article");
  art.innerHTML = `<input type="checkbox" /><p>${todoItem.description}<p>${todoItem.timestamp}</p><button type="submit" class="delete-button">TA BORT</submit>`;
  itemList.insertAdjacentElement("afterbegin", art);

  let deleteButton = document.querySelector(".delete-button");
  deleteButton.addEventListener("click", (e) => {
    if (confirm("Vill du verkligen radera?")) {
      console.log(e.srcElement);
      e.srcElement.parentNode.remove();
    }
  });
}
function postExamples() {
  let a = new todoItem("Köpa nya fiskar, ty de gamla har tatt slut");
  let b = new todoItem("Vattna sissusen");
  let c = new todoItem("Samla alla kräftskal i en prydlig liten hög");
  let d = new todoItem("Fixa dörren");
  let e = new todoItem("Muta portvakten");
  postTodoItem(a);
  postTodoItem(b);
  postTodoItem(c);
  postTodoItem(d);
  postTodoItem(e);
}
