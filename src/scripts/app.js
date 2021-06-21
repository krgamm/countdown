countDownTimer("06/30/2021 9:00 PM");

function countDownTimer(dt) {
  var end = new Date(dt);

  var _seconds = 1000;
  var _minutes = _seconds * 60;
  var _hours = _minutes * 60;
  var _days = _hours * 24;
  var timer;

  function showRemaining() {
    var now = new Date();
    var distance = end - now;

    var days = Math.floor(distance / _days);
    var hours = Math.floor((distance % _days) / _hours);
    var minutes = Math.floor((distance % _hours) / _minutes);
    var seconds = Math.floor((distance % _minutes) / _seconds);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }
  timer = setInterval(showRemaining, 1000);
}
