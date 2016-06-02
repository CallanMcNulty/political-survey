$(document).ready(function() {
  $("form#test").submit(function(event) {
    event.preventDefault();
    var score = 0;
    var completed = true;

    for (var i=1; i<13; i++) {
      var num = i.toString();
      var v = parseInt($("input:radio[name="+num+"]:checked").val());
      if(v) {
        score += v;
      } else {
        completed = false;
      }
    }

    var message = "";
    if(completed) {
      if(score > 100) {
        message = "Seig Heil!";
      } else if (score > 80) {
        message = "Be sure to renew your NRA membership.";
      } else if (score > 40) {
        message = "Regan's your man!";
      } else if (score > 0) {
        message = "You're a true American!";
      } else if (score > -40) {
        message = "OBAMA!";
      } else if (score > -80) {
        message = "Feel the Bern!";
      } else {
        message = "Greetings, comrade.";
      }
    } else {
      message = "Please complete the test.";
      $('h4').text("Test Failed:");
    }
    $("#result").text(message);
    $("#myModal").modal("show");
  });
});
