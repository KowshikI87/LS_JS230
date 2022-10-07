//fix header in body > header from the original site

//Task 1: move "My Site" h1 to top of body > header
let topHeader = document.querySelector("body > header");
let mySiteHeader = document.querySelector("body > main > h1");
let topNavBar = document.querySelector("body > header > nav");
topHeader.insertBefore(mySiteHeader, topNavBar);

//move body > header above body > main
let bodyMain = document.querySelector("body > main");
document.body.insertBefore(topHeader, bodyMain);

//*****fix the caption of the images*****

//get references to proper nodes
let allFigures = document.querySelectorAll("figure")
let chinStickFigure = allFigures[1]
let babyMopFigure = allFigures[0]
let chinStickCaption = babyMopFigure.querySelector("figcaption")
let babyMopCaption = chinStickFigure.querySelector("figcaption")

//put the caption in the right place
chinStickFigure.removeChild(babyMopCaption)
babyMopFigure.removeChild(chinStickCaption)
chinStickFigure.appendChild(chinStickCaption)
babyMopFigure.appendChild(babyMopCaption)

//add both figures to article (will reposition things automatically since duplicate DOM node can't exist
let contentArticle = document.querySelector("article");
contentArticle.appendChild(chinStickFigure);
contentArticle.appendChild(babyMopFigure);




//old way to try to get the list of figures
// let babyMopFigure = document.querySelector("body > main > section > figure")
// let chinStickFigure = document.querySelector("body > main > section").childNodes[childNodes.length - 1]

//move the figures into the articles


