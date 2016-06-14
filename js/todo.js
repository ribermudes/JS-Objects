// Business logic - Back-end logic

function ToDoList(task, date) {
  this.newTask = task;
  this.newDate = date;
};

ToDoList.prototype.addDate = function () {
  return this.newTask + " " + this.newDate;
}

// User Interface logic or Front-end logic
$(document).ready(function () {
  $("form#form-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#input-task").val();
    var inputtedDate = $("input#input-date").val();

    var newToDoList = new ToDoList(inputtedTask, inputtedDate);

    $("ul.show-todo-list").append("<li><span class='show-todo-list'>" + newToDoList.newTask + " on " + newToDoList.newDate + "$( "<li>" ).last().addClass( "checkbox" ); " + "</span></li>");
    $("#show-tasks").show();
    $("show-tasks h2").text();

    //
    // $("input#input-task").val("");
  });
});
