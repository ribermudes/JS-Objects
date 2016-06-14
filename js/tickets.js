// back-end logic or business logic

function Ticket(feature, time, age) {
  this.feature = feature;
  this.time = time;
  this.age = age;
}

function ticketCost () {
  return ticketPrice = feature.value + time.value + age.value;
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
    console.log(displayPrice);
    // var newTicket = new Ticket(features, time, age);
    // console.log(newTicket);
    $("#tickets-output").show();
    $("#tickets-output").text(displayPrice);
  });
});
