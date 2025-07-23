/*const http = require('http');
const { json } = require('stream/consumers');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type' : 'application\json'});
    resp.write(JSON.stringify({name: 'Dilip Kumar',email:'dilipdhar@test.com'}));
    resp.end()
}).listen(5000);*/

/*const http= require('http');
const data = require('./data');
http.createServer((req,resp)=>{
resp.writeHead(201,{'Content-Type':'application\json'});
resp.write(JSON.stringify(data));
resp.end();
}).listen(5000);*/



// Middleware

/*const express = require('express');
const app = express();

const reqfilter = (req, resp, next) => {
   const age = parseInt(req.query.age);  // Good practice to parse once

   if (!req.query.age) {
       resp.send("please provide age");
   }
   else if (age < 18) {
       resp.send("you can not access this page");
   }
   else {
       next();
   }
}

app.use(reqfilter);

app.get('/', (req, resp) => {
    resp.send('Welcome to home page');
});

app.get('/users', (req, resp) => {
    resp.send('Welcome to users page');
});

app.listen(5000);*/


//route level middleware


/*const express = require('express');
const reqfilter= require(`./middleware`)
const app = express();
const route = express.Router();


//app.use(reqfilter);
route.use(reqfilter);
app.get('/', (req, resp) => {
  resp.send('Welcome to home page');
});

app.get('/users',reqfilter, (req, resp) => {
  resp.send('Welcome to users page');
}); // in this line not use to route

route.get('/about', (req, resp) => {
  resp.send('Welcome to about page');
});

route.get('/contact', (req, resp) => {
  resp.send('Welcome to contact page');
});  // in this line use to middleware
app.use('/',route);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});*/


// app.js or index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Nodemon!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});



