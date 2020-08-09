# React pagination with Node:

### This is an easy way to implement pagination with React + Node

 In this example, in the server we fetch some data from an API (https://pokeapi.co/),
 if it's the first time we are running the application, it will receive the data from the API and persist it in the database (I'm using mongoDB atlas)
 Otherwise it won't fetch the data.
 
 After that we send a request from the frontend to our backend with the parameters:
 ```js
 const res = await axios.get(`/posts?limit=${limit}&page=${page}`);
 ```
`limit` is to limit the number of data we want to show per page, and `page` is to choose what page we want to show

Then, with the help of some functions from MongoDB, we can achieve our goal doing the following:
```js
const startPoint = (req.query.page - 1) * req.query.limit;
    const posts = await Posts.find()
      .limit(parseInt(req.query.limit))
      .skip(startPoint)
      .exec();

    res.json(posts);
```
All the other cases like next button or previous button are being handled in the front-end. Check the /client folder to see the full implementation.
 
# Quick Start
 In the root directory, run:
### `npm install` 
and
### `node index`

 Then, open another terminal, move to the /client folder and run:
### `npm install`
e
### `npm start`

After that the application will start.

