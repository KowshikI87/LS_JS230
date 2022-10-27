//exercise 1 to 4
let post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
};

post.body = '<p>' + post.body + '</p>';
post.tags = ['Food', 'Cooking', 'Vegetables'];

document.addEventListener("DOMContentLoaded", event => {
  let postTemplate = Handlebars.compile($("#post").html());
  $("body").append(postTemplate(post));
});


