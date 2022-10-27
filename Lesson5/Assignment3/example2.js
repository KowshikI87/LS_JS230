//attaches click event handler to all the anchor element
$('a').on('click', function(e) {
  e.preventDefault();

  //hides all the article elements

  //then call the filter method on all the article elements and only return
  //the article element which's data-block attribute matches with the attribute
  //of the "a" element (that we clicked on; this ==> currentTarget)

  //then call "show" on this object to only show that element that we got back
  //from filtering
  $('article').hide().filter('[data-block=' + $(this).attr('data-block') + ']').show();
});