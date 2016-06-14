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

    var inputtedFeatures = parseInt($("#film-choices").val());
    var inputtedTimes = parseInt($("#time-choices").val());
    var inputtedAges = parseInt($("#age-choices").val());

    var ticketPrice = new Ticket(inputtedFeatures, inputtedTimes, inputtedAges);

    var displayPrice = ticketPrice.feature + ticketPrice.time + ticketPrice.age;

    $("#tickets-output").show();
    $("#tickets-output").text(displayPrice);
  });
});
