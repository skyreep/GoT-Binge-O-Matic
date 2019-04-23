// Set the date of the GoT Season 8 Premiere
var countDownDate = new Date("Apr 14, 2019 21:00:00").getTime();

// Update the count down stats every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Find the distance between the current time and the premiere time
  var distance = countDownDate - now;

  // Calculate the days, hours, minutes and seconds until the premiere by converting the from ms
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // GoT runtime in ms
  var runtime = 228600000;

  // Calculate the percent of remaining time required to successfully watch all episodes
  var percentTimeReq = (runtime / distance);

  // Display the countdown to the premiere in the DOM
  document.getElementById("GOTCountdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If it's still possible to binge every episode before the premiere do the following
  if (percentTimeReq < 1 && percentTimeReq >= 0) {
    // Display the percentage of your remaining time until premiere you'd have to spend bingeing
    document.getElementById("BingePercent").innerHTML = (percentTimeReq * 100).toFixed(2) + "% of your total remaining time until the premiere will need to be spent binging.";

    // Calculate hours per day required for said binge
    var bingeHoursPerDay = ((days * 24) * percentTimeReq) / days;

    // Display the daily binge countdown
    document.getElementById("HoursPerDay").innerHTML = "You need to spend " + bingeHoursPerDay.toFixed(1) + " hours per day binging Game of Thrones for the next " + days + " days starting tomorrow.";
  } else {
    // Display a message if it's impossible to binge
    document.getElementById("BingePercent").innerHTML = "You're too late to binge every episode beforehand!";

    // Display another message in lieu of the "binge hours per day" section if it is impossible
    document.getElementById("HoursPerDay").innerHTML = "You're too late to binge every episode beforehand!";
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("GOTCountdown").innerHTML = "Winter is here!!!";
  }
}, 1000); //setInterval to update every second

$(".hero").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".hero").css({ height: $(window).height() + "px" });
});
