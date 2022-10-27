document.addEventListener("DOMContentLoaded", event => {
  var $a = $('a[data-block=gold]');

  console.log($a.attr('data-block')); // gold
  console.log($a.data('block')); // gold

  $a.data('block', 'silver');

  console.log($a.attr('data-block')); // gold
  console.log($a.data('block')); // silver
});

