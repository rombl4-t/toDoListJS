let toDoList = document.querySelector("#toDoList");
let taskForm = document.querySelector("#taskFormer");

function addTask(event) {
  let taskItem = document.createElement("li");
  taskItem.innerText = document.querySelector("#taskName").value;
  toDoList.append(taskItem);
  document.querySelector("#taskName").value = "";
  event.preventDefault();
}

function liner(event) {
  let target = event.target;
  if (target.style.textDecoration != "") {
    target.style.textDecoration = "";
    return;
  }
  target.style.textDecoration = "line-through";
}

taskForm.addEventListener("submit", addTask);
toDoList.addEventListener("click", liner);