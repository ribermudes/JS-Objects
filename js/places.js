// Back-end Business logic
function myPlaces(place, time, notes, landmarks) {
  this.newPlace = place;
  this.newTime = time;
  this.newNotes = notes;
  this.newLandmarks = landmarks;
}

myPlaces.prototype.placeIveBeen = function () {
  return this.newPlace + " " + this.newTime + " " + this.newNotes + " "
+ this.newLandmarks
}


// front end logic user Interface
//
$(document).ready(function() {
  $("button#vietnam-button").click(function(event) {
    event.preventDefault();

    var vietnamPlaces = new myPlaces("Vietnam", "2004", "Very Hot", "HaLong Bay");

    $("#show-place").show();
    $("ul#show-list").append("<li><span class='place'>" + vietnamPlaces.placeIveBeen() + "</span></li>");
  });
$("button#oregon-button").click(function(event) {
  event.preventDefault();

  var oregonPlaces = new myPlaces("Oregon", "2005", "Very Cool", "Pioneer Square");

  $("#show-place").show();
  $("ul#show-list").append("<li><span class='place'>" + oregonPlaces.placeIveBeen() + "</span></li>");
});


});
