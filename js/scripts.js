$(document).ready(function() {
  $(".col-md-8").click(function() {
    $("#front").toggle();
    $("#back").toggle();
  });
  $("#hint").click(function() {
    $("#hinttext").toggle();
  });
  var word = ["JavaScript", "Operators", "Variables", "Variable naming conventions", "Functions", "Methods",
              "Arguments", "Parameters", "Return", "Chaining methods", "Strings", "Booleans", "Undefined",
              "NaN", "Escape", "Alert", "Comments", "jQuery", "Attributes"];
  var definition = ["an object-oriented computer programming language commonly used to create interactive effects within web browsers",
                    "a symbol that is used to perform an operation",
                    "hold the data value and it can be changed anytime",
                    "lowerCamelCase",
                    "a set of statements that performs a task or calculates a value",
                    "a function that acts upon an element",
                    "the input data passed into the function",
                    "the necessary input for a function to run correctly",
                    "the output value reached from calling a function",
                    "attaching several functions acting on an element - order matters",
                    "data read as text",
                    "binary values, true or false",
                    "the result of not assigning value to a variable",
                    "a value that is not recognized as a number",
                    "makes a string portable",
                    "the alert box that pops up",
                    "code that is not run by the compiler, used to give notes",
                    "library of .js code",
                    "style that can be assigned in .js files"
                    ]
  var i = 0;
  $("#previous").click(function() {
    i -= 1;
    if (i < 0) {
      i = 18;
    };
    $("#front").children("h1").text(word[i]);
    $("#back").children("h1").text(definition[i]);
  });
  $("#next").click(function() {
    i += 1;
    if (i > 18) {
      i = 0;
    };
    $("#front").children("h1").text(word[i]);
    $("#back").children("h1").text(definition[i]);
  });
  $("button#light-theme").click(function() {
    $("body").removeClass();
    $("body").addClass("light-theme");
    $(".well").css("background-color", "white");
    $("#front").css("background-color", "grey");
    $("#back").css("background-color", "lightgrey");
  });
  $("button#dark-theme").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-theme");
    $(".well").css("background-color", "grey");
    $("#front").css("background-color", "black");
    $("#back").css("background-color", "darkgrey");
  });

});
