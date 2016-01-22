var pingCalc = function(input) {
	var divided = input

  if(divided) {
    var resultsArray = [];
    var x = 1;
     while(x < input) {
      divided = pingpongMath(x); resultsArray.push(divided); ++x;
    }
    return resultsArray.join(" ");
  } else {
    return "False";
  }
};

var pingpongMath = function(input) {
  if(input % 15 === 0) {
    return "Ping Pong";
  } else if(input % 5 === 0) {
    return "Ping";
  } else if(input % 3 === 0) {
    return "Pong";
  } else {
    return input;
  }
};

$(document).ready(function(event) {
    $("form#ping").submit(function(event){

      var input = parseInt($("input#userInput").val());
      var divided = pingCalc(input);

  $(".result").text(divided);
  $("#result").show();
  event.preventDefault();

  });
});
