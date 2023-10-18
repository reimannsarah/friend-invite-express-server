const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
// const cors = require("cors");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(cors);

app.listen(port || 3000, () => {
  console.log(`Server is running on port ${port}`)
});

let friends = [
  {
    "firstName": "Mary",
    "lastName": "Adams",
    "email": "mary.adams@gmail.com"
  },
  {
    "firstName": "James",
    "lastName": "Frank",
    "email": "james.frank@gmail.com"
  },
  {
    "firstName": "Patricia",
    "lastName": "Baker",
    "email": "patricia.baker@gmail.com"
  },
  {
    "firstName": "John",
    "lastName": "Ghosh",
    "email": "john.ghosh@gmail.com"
  },
  {
    "firstName": "Jennifer",
    "lastName": "Clark",
    "email": "jennifer.clark@gmail.com"
  },
  {
    "firstName": "Robert",
    "lastName": "Hills",
    "email": "robert.hills@gmail.com"
  },
  {
    "firstName": "Linda",
    "lastName": "Davis",
    "email": "linda.davis@gmail.com"
  },
  {
    "firstName": "Michael",
    "lastName": "Irwin",
    "email": "michael.irwin@gmail.com"
  },
  {
    "firstName": "Elizabeth",
    "lastName": "Evans",
    "email": "elizabeth.evans@gmail.com"
  },
  {
    "firstName": "William",
    "lastName": "Jones",
    "email": "william.jones@gmail.com"
  }
];

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.post('/contacts/invited', (req, res) => {
  const num = req.body.length;
  res.json(`You have invited ${num} friend(s)`)
})