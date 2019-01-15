$(document).ready(function() {
  $(".col-md-8").click(function() {
    $("#front").toggle();
    $("#back").toggle();
  });
  $("#hint").click(function() {
    $("#hinttext").toggle();
  });
  $("#previous").click(function() {
    $("#hinttext").toggle();
  });
  $("#next").click(function() {
    $("#").toggle();
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
