//exercise 1 to 4
let post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
};

post.body = '<p>' + post.body + '</p>';
post.tags = ['Food', 'Cooking', 'Vegetables'];

let posts = [
  {
    title: 'voluptate velit',
    published: 'April 2, 2015',
    body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
  }
];
posts.push(post);


document.addEventListener("DOMContentLoaded", event => {
  let postsTemplate = Handlebars.compile($("#posts").html());
  Handlebars.registerPartial('tag', $('#tag').html());
  Handlebars.registerPartial('post', $('#post').html());
  $("body").append(postsTemplate({ posts: posts}));
});

