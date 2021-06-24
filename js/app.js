setInterval("tgy()", 1500);
function tgy() {
  document.getElementById("tgy").style.color = "#32CD32";
  setInterval("tgyx()", 500);
}
function tgyx() {
  document.getElementById("tgy").style.color = "black";
  setInterval("tgy()", 500);
}

var countDownDate = new Date("feb 14, 2021 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("event_timer").innerHTML =
    hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("event has ended").innerHTML = "EXPIRED";
  }
}, 1000);
