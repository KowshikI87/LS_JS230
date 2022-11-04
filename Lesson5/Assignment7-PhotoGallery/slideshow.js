$(function() {
  let $slideshow = $("#slideshow");
  let $nav = $slideshow.find("ul");

  //click event attached to "ul"
  //we are using a selector so we only run this
  //if event.target.tagName = "a'"
  $nav.on("click", "a", function(e) {
    //prevent default action
    e.preventDefault();
    //find the li element under which the "a" element is nested
    let $li = $(e.currentTarget).closest("li");

    //find the index of this li elemnet in comparison to its siblings
    let idx = $li.index();

    //find all the figure element children in the slideshow element
    //call "stop" method to stop all animations so we stop queuin the animation
    //then use ":visible" to select all elements which are visible
    //so all the visible figur elements
    //then call the .fadeOut method which hides the matched element
    //by fading them to transparent
    $slideshow.find("figure").stop().filter(":visible").fadeOut(300);

    //using the "eq" method and the index, we find the figure element
    //which we need to show and we use the fadein animation
    $slideshow.find("figure").eq(idx).delay(300).fadeIn(300);

    //find the nav's child element which has a class of "active"
    //and remove the "active" class
    //i think the active class is used to make the border change
    $nav.find(".active").removeClass("active");

    //add the active class to the li element which's child "a" elmeent 
    //we clicked
    $li.addClass("active");
  });
});