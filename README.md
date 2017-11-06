# Natural Cycles Backend Challenge 3

[![Greenkeeper badge](https://badges.greenkeeper.io/jimmywarting/natural-cycles.svg)](https://greenkeeper.io/)
Code sample, this project demonstrate a CRUD example for creating, reading, update and delete users with email addresses.

Tools:
- NodeJS
- TypeScript
- ExpressJS
- MongoDB
- Mongoose
- GulpJS

Run:
```
$ npm install
$ gulp
```


<h2> REST API Definitions: </h2>

CREATE <br />
   <code> > METHOD: POST </code> <br />
   <code> > PARAMS: {"email":"me@example.com"} </code> <br />
   <code> > URL: http://localhost:5000/users </code> <br />
   <code> > RETURN: success or error </code> <br />
<br />

RETRIEVE <br />
   <code> > METHOD: GET </code> <br />
   <code> > URL: http://localhost:5000/users </code> <br />
   <code> > RETURN: [{"email":"me@example.com"}]</code> <br />
<br />
<br />

GET ONE <br />
   <code> > METHOD: GET </code> <br />
   <code> > URL: http://localhost:5000/users/:_id </code> <br />
   <code> > RETURN: {"email":"me@example.com"} </code> <br />
<br />
<br />

UPDATE <br />
   <code> > METHOD: PUT </code> <br />
   <code> > PARAMS: {"email":"you@example.com"} </code> <br />
   <code> > URL: http://localhost:5000/users/:_id </code> <br />
   <code> > RETURN: success or error </code> <br />
<br />
<br />

DELETE <br />
   <code> > METHOD: DELETE </code> <br />
   <code> > URL: http://localhost:5000/users/:_id </code> <br />
   <code> > RETURN: success or error </code> <br />
<br />
<br />
