// back-end logic or business logic

function Ticket(feature, time, age) {
  this.feature = feature;
  this.time = time;
  this.age = age;
}

// user interface

$(document).ready(function() {
  $("form#tickets").submit(function(event) {
    event.preventDefault();

    var features = $("input[name=features]:checked").val();
    var time = $("input[name=time]:checked").val();
    var age = $("input[name=age]:checked").val();

  });
});
