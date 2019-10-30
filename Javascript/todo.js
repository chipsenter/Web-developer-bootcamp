

window.setTimeout(function () {
  var todos = [];
  var input = prompt("What would you like to do?");

  while (input !== "quit") {

    if (input === "list") {
      listTodos();
    } else if (input === "new") {
      addTodos();
    } else if (input === "delete") {
      deleteTodos();
    }
    input = prompt("What would you like to do?");

  }
  console.log("You quit the app!")


function listTodos() {
  console.log("************")
  todos.forEach(function (todo, index) {
    console.log(index + ": " + todo);
  });
  console.log("***********");
}

function addTodos() {
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("You added: " + newTodo + " to the list");
}

function deleteTodos() {
  var todoIndex = prompt("Enter the index of todo to delete");
  // delete an item from the list from the splice method
  todos.splice(todoIndex, 1);
  console.log("You deleted item: " + todoIndex + " from your list");
}
}, 500);
