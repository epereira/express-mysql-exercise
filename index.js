require('dotenv').config();
const express = require('express');
const usersDB = require('./userHandlers');

const app = express();
app.use(express.json());
const port = process.env.APP_PORT ?? 5000;

app.get('/api/users/:id', usersDB.getUser);

app.get('/api/users', usersDB.getUsers);

app.post('/api/users', usersDB.createUser);

app.put('/api/users/:id', usersDB.updateUser);

app.get('/', (req, res) => {
  return res.send({ express: 'Hello, welcome to the users API' });
});


app.listen(port, () => console.log(`Listening on port ${port}`));