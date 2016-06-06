$(document).ready(function() {
  var resultSH = 0;
  var resultNRA = 0;
  var resultRM = 0;
  var resultYTA = 0;
  var resultO = 0;
  var resultFB = 0;
  var resultGC = 0;
  $("#tally").prop("disabled", true);
  $("form#test").submit(function(event) {
    event.preventDefault();
    var score = 0;
    var completed = true;
    $(".red-text").removeClass("red-text");

    for (var i=1; i<13; i++) {
      var num = i.toString();
      var v = parseInt($("input:radio[name="+num+"]:checked").val());
      if(v || v === 0) {
        score += v;
      } else {
        completed = false;
        $("input[name="+num+"]").parent().siblings("p").addClass("red-text");
      }
    }



    var message = "";
    if(completed) {
      $("#bar-block").show();
      if(score > 100) {
        message = "Seig Heil!";
        resultSH += 1;
      } else if (score > 80) {
        message = "Be sure to renew your NRA membership.";
        resultNRA += 1;
      } else if (score > 40) {
        message = "Regan's your man!";
        resultRM += 1;
      } else if (score > 0) {
        message = "You're a true American!";
        resultYTA += 1;
      } else if (score > -40) {
        message = "OBAMA!";
        resultO += 1;
      } else if (score > -80) {
        message = "Feel the Bern!";
        resultFB += 1;
      } else {
        message = "Greetings, comrade.";
        resultGC += 1;
      }
      $("#tally").prop("disabled", false);
      $("#SH").text(resultSH.toString());
      $("#NRA").text(resultNRA.toString());
      $("#RM").text(resultRM.toString());
      $("#YTA").text(resultYTA.toString());
      $("#O").text(resultO.toString());
      $("#FB").text(resultFB.toString());
      $("#GC").text(resultGC.toString());
    } else {
      message = "Please complete the highlighted questions.";
      $('h4').text("Test Failed:");
      completed = true;
      $("#bar-block").hide();
    }
    $("#bar").css("width", (((score+92)/217)*100).toString()+"%" );
    $("#result").text(message);
    $("#myModal").modal("show");
  });
});
