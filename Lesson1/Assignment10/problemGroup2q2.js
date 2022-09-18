//don't need the walk method anymore
let paragraphs = document.getElementsByTagName("p");

//can't use forEach loop without using tricks; so use the for loop
for (let index = 0; index < paragraphs.length; index++) {
  paragraphs[index].classList.add("article-text");

}


//only add it to paragraphs inside a <div class="intro">

//get element by className = "intro"
//then from those elements (array like object) if their tagName = "p"

document.querySelector('#divTwo, #divOne');