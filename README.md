# Blog Project

Its an little Blog app that gets posts, shows the detail of the post, add new post and delete it.

[React-redux-boilerplate](https://github.com/adeministratorTr/react-redux-boilerplate) project used as an template.

## How to Run?

Just `yarn` or `npm i` and then `yarn start` or `npm run start`. 

To run cypress, first ensure that you start the project. Since its not a deployed project, cypress need your localhost. `yarn test:cy` or `npm run test:cy` will work.

## Pages
When you run the project, you have these pages:

  `/`           homepage    / has some explanations and go to blog posts list page,
  
  `/posts`      posts       / lists blog posts, you can go to detail of an selected post, delete it, and search for post title
  
  `/posts/:id`  post-detail / shows blog post detail with body and header,
  
  `/add-post`   add-post    / lets you create a blog post with a header and body.
  
