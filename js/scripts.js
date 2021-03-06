$(document).ready(function() {
  $(".col-md-8").click(function() {
    $("#front").toggle();
    $("#back").toggle();
  });
  $("#open").click(function() {
    $("#open").toggle();
    $("#close").toggle();
    $("#toc").toggle();
    $("#jump").toggle();
  });
  $("#close").click(function() {
    $("#open").toggle();
    $("#close").toggle();
    $("#toc").toggle();
    $("#jump").toggle();
  });
  $("#hint").click(function() {
    $("#hinttext").toggle();
  });
  var word = ["JavaScript", "Operators", "Variables", "Variable naming conventions", "Functions",
              "Methods", "Arguments", "Parameters", "Return", "Chaining methods", "Strings", "Booleans",
              "Undefined", "NaN", "Escape", "Alert", "Comments", "jQuery", "Attributes"];
  var definition = ["an object-oriented language used to create interactive effects within web browsers",
                    "symbols that are used to perform an operation: +, -, *, /, =, %, >, <, ^, |, &, !",
                    "hold the data value and can be changed anytime",
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
                    "function that makes a string portable",
                    "function to make a pop-up window",
                    "code that is not run by the compiler, used to give notes",
                    "library of .js code",
                    "styles that can be assigned in .js files"];
  var hint = ["it's what you're using right now!",
              "think of a calculator",
              "if you can't get this, give up",
              "hump DAY",
              "myFunc",
              "think of .toUpperCase()",
              "myFunc(argument)",
              "myFunc(parameter) (not a copy of the last hint)",
              "myFunc() {... return ...}",
              ".prepend(...).toUpperCase()",
              "sentences",
              "1 or 0",
              "var x = y is defining something",
              "0/0",
              "escape(), idk man",
              "alert(...)",
              "//.... in .js, <!-- --> in .html",
              "$(...)",
              ".css('...', '...')"];
  var i = 0;

  $("#toc").children("li").click(function() {
    i = $(this).index();
    $("#front").children("h1").text(word[i]);
    $("#back").children("h1").text(definition[i]);
    $("#hint").children("#hinttext").text(hint[i]);
    $("#open").toggle();
    $("#close").toggle();
    $("#toc").toggle();
    $("#jump").toggle();
  });

  $("#previous").click(function() {
    i -= 1;
    if (i < 0) {
      i = 18;
    };
    $("#front").children("h1").text(word[i]);
    $("#back").children("h1").text(definition[i]);
    $("#hint").children("#hinttext").text(hint[i]);
    $("#front").show();
    $("#back").hide();
  });

  $("#addWord").click(function() {
    $("ul#wordList").append("<li>" + word[i] + "</li>");
  });

  $("#next").click(function() {
    i += 1;
    if (i > 18) {
      i = 0;
    };
    $("#front").children("h1").text(word[i]);
    $("#back").children("h1").text(definition[i]);
    $("#hint").children("#hinttext").text(hint[i]);
    $("#front").show();
    $("#back").hide();
  });

  $("button#light-theme").click(function() {
    $("body").removeClass();
    $("body").addClass("light-theme");
    $("body").css("background-color", "lightgrey");
    $(".well").css("background-color", "white");
    $("#front").css("background-color", "#eeeeee");
    $("#back").css("background-color", "#eeeeee");
    $(".well").children("*").css("color", "#557a95");
    $("button#light-theme").toggle();
    $("button#dark-theme").toggle();
    $("body").css("background-image", "url(img/snooplite.gif)");
  });

  $("button#dark-theme").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-theme");
    $("body").css("background-color", "#5D5C61");
    $(".well").css("background-color", "#bababa");
    $("#front").css("background-color", "#949494");
    $("#back").css("background-color", "#949494");
    $(".well").children("*").css("color", "#557a95");
    $("button#light-theme").toggle();
    $("button#dark-theme").toggle();
    $("body").css("background-image", "url(img/snoopdark.gif)");
  });

});
