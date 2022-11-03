$('li li').filter(":contains('ac ante')").parents('li');

// or

//I used this code. I am not sure why using "parent" instead of
//parent is not working
$("li li:contains('ac ante')").parents('li');