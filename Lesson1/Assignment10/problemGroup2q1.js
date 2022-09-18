//don't need the walk method anymore
let paragraphs = document.getElementsByTagName("p");

//can't use forEach loop without using tricks; so use the for loop
for (let index = 0; index < paragraphs.length; index++) {
  paragraphs[index].classList.add("article-text");

}