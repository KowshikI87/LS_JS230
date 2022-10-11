/* eslint-disable max-lines-per-function */
document.addEventListener("DOMContentLoaded", event => {
  //handling click event in navigation bar
  let navBar = document.querySelector("body > header > ul");
  navBar.addEventListener("click", event => {
    event.stopPropagation();
    let hrefAttr = event.target.getAttribute("href");
    if (hrefAttr) {
      addHighlightToArticle(hrefAttr.replace("#", ""));
    }
  });

  //handling click event in child element of article
  document.addEventListener("click", event => {
    let clickedElement = event.target;
    let clickedElementParentArticleId = getIdOfArticleclicked((clickedElement));
    let mainElement = document.querySelector("main");

    if (clickedElementParentArticleId) {
      addHighlightToArticle(clickedElementParentArticleId);
      mainElement.classList.remove("highlight");
    } else {
      mainElement.classList.add("highlight");
      addHighlightToArticle();
    }
  });
});

function getIdOfArticleclicked(childElem) {
  let allArticles = document.querySelectorAll("body > main > article");
  for (let idx = 0; idx < allArticles.length; idx++) {
    if (allArticles[idx].contains(childElem)) {
      return allArticles[idx].id;
    }
  }
  return undefined;
}

function addHighlightToArticle(currentArticleId) {
  let allArticles = document.querySelectorAll("body > main > article");
  for (let idx = 0; idx < allArticles.length; idx++) {
    if (allArticles[idx].id === currentArticleId) {
      allArticles[idx].classList.add("highlight");
    } else {
      allArticles[idx].classList.remove("highlight");
    }
  }
}