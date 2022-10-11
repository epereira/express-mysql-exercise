require('dotenv').config();
const express = require('express');
const usersDB = require('./userHandlers');

const app = express();
const port = process.env.APP_PORT ?? 5000;

app.get('/api/users/:id', usersDB.getUser);

app.get('/api/users', usersDB.getUsers);

app.get('/', (req, res) => {
  return res.send({ express: 'Hello, welcome to the users API' });
});


app.listen(port, () => console.log(`Listening on port ${port}`));