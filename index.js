//Set GoT Runtime for all episodes in minutes
var runtime = 3810;

// Set the date we're counting down to
var countDownDate = new Date("Apr 14, 2019 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for remaining days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // GoT runtime in ms
  var runtime = 228600000;

  // Calculate the percent of remaining time required to successfully watch all episodes
  var percentTimeReq = (runtime / distance);

  // Display the countdown
  document.getElementById("GOTCountdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If it's still possible to binge every episode before the premiere
  if (percentTimeReq < 1) {
    // Display the percentage of your remaining time until premiere you'd have to spend bingeing
    document.getElementById("BingePercent").innerHTML = (percentTimeReq * 100).toFixed(2) + "% of your total remaining time until the premier will need to be spent binging.";

    // Calculate hours per day required for said binge
    var bingeHoursPerDay = ((days * 24) * percentTimeReq) / days;

    // Display the daily binge countdown
    document.getElementById("HoursPerDay").innerHTML = "You need to spend " + bingeHoursPerDay.toFixed(1) + " hours per day binging Game of Thrones for the next " + days + " days starting tomorrow.";
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("GOTCountdown").innerHTML = "EXPIRED";
  }
}, 1000); //setInterval to update every second
