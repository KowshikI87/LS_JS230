/*
Write JavaScript code that makes a
GET request to this URL: https://api.github.com/repos/rails/rails.
*/

let request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/repos/rails/rails");
request.send();

/*
What property will contain the response body
after the request from the previous problem completes?
*/

//responseText or response