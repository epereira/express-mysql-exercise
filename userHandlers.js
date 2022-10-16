const database = require('./database');

const getUsers = async (req, res) => {
    const [users] = await database.query('SELECT * FROM users');
    if(users.length > 0) {
        return res.send(users);
    } else {
        return res.send({ message: 'No users found' });
    }
}

const getUser = async (req, res) => {
    const [user] = 
        await database.query('SELECT * FROM users WHERE id = ?', [req.params.id])
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error retrieving data from database");
        });

    if(user.length > 0) {
        return res.send(user[0]);
    } else {
        return res.status(404).send({ error: 'User not found' });
    }
}

const createUser = async (req, res) => {
    const { username, country } = req.body;
    const [user] = await database.query('INSERT INTO users (username, country) VALUES (?, ?)', [username, country])
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error inserting data into database");
        });
     
    return res.location(`/api/users/${user.insertId}`).sendStatus(201);
}

module.exports = { getUsers, getUser, createUser };
