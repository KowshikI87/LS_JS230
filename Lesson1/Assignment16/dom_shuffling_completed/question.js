let header = document.querySelector("body > header");
let h1 = document.querySelector("main > h1");
header.insertBefore(h1, header.firstChild); //inserts "My Site" before nagivation bar
document.body.insertBefore(header, document.body.firstChild);

//selects both images including captions
let [ chinStickFigure, babyMopFigure ] = document.querySelectorAll("figure");

//selects the images only
let babyMopImage = chinStickFigure.querySelector("img");
let chinStickImage = babyMopFigure.querySelector("img");
//moves the images with the correct caption
chinStickFigure.insertBefore(chinStickImage, chinStickFigure.firstChild);
babyMopFigure.insertBefore(babyMopImage, babyMopFigure.firstChild);

let article = document.querySelector("article");
article.insertBefore(chinStickFigure, null);
article.insertBefore(babyMopFigure, null);