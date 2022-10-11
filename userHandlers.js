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

module.exports = { getUsers, getUser };
