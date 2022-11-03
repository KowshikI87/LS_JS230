//I like this solution
$('td').not(".protected");
// or
$('td:not(".protected")');


//My solution did not work
//I took it from examples given in documentation for "not" method
let tableCellsNotProtected = $("table td").not( document.querySelector(".protected"));