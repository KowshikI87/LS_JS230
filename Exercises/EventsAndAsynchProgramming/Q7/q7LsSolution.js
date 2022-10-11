function highlight({target}) {
  let element;
  let id;

  removeHighlight();

  if (target.tagName === 'A') {
    id = target.href.match('#article-[0-9]+')[0]
    element = document.querySelector(id);
  } else {
    element = document.querySelector('main');
  }

  element.classList.add('highlight');
}

function removeHighlight() {
  const highlighted = document.querySelector('.highlight');
  if (highlighted) {
    highlighted.classList.remove('highlight');
  }
}

document.addEventListener("DOMContentLoaded", event => {
  const nav = document.querySelector('header ul');
  const main = document.querySelector('main');

  nav.addEventListener('click', highlight);
  document.addEventListener('click', highlight);
  main.addEventListener("click", e => {
    e.preventDefault();
    let article = e.target;
    if (article.tagName !== 'ARTICLE') { article = article.parentNode; }

    if (article.tagName === "ARTICLE") {
      e.stopPropagation();
      removeHighlight();
      article.classList.add("highlight");
    }
  });
});

