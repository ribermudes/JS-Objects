// Business logic - Back-end logic

function ToDoList(task) {
  this.newTask = task;
  console.log(this.newTask);
};



// ToDoList.prototype.allTasks = function () {
//   return this.newTask1 + " " + this.newTask2 + " " + this.newTask3;
// }

// User Interface logic or Front-end logic
$(document).ready(function () {
  $("form#form-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#input-task").val();

    var newToDoList = new ToDoList(inputtedTask);

    console.log(newToDoList);

    $("ul.show-todo-list").prepend("<li><span class='show-todo-list'>" + newToDoList.newTask + "</span></li>");
    // });

    // newToDoList.forEach(function (task) {
    // $("ul#show-todo-list").append("<li>" + task + "</li>");
    // });


    // $(".todo-item").last().click(function() {
    //   $(".show-tasks").show();
    //   $("show-tasks h2").text(newToDoList.task);
    //
    // });

    $("input#input-task").val("");
  });
});
