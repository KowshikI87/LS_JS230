$(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();
    var character = $("#key").val();

    $(document).off("keypress").on("keypress", function(e) {
      if (e.key !== character) {
        return;
      }
      //if the key we pressed matches
      //with what we typed in the input box
      //then we trigger the click event on the anchor element
      //(there is only one anchor element)
      $("a").trigger("click");
    });
  });

  $("a").on("click", function(e) {
    e.preventDefault();
    $("#accordion").slideToggle();
  });
});