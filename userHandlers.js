const database = require("./database");

const getUsers = async (req, res) => {
  const sql = "SELECT * FROM users";
  const where = [];
  if(req.query.language !== undefined) {
    where.push({column: "language", value: req.query.language, operator: "="});
  }
  if(req.query.city !== undefined) {
    where.push({column: "city", value: req.query.city, operator: "="});
  }
  
  const sqlWhere = where.reduce((acc, curr, index) => {
    if(index === 0) {
      return acc + ` WHERE ${curr.column} ${curr.operator} '${curr.value}'`;
    }
    return acc + ` AND ${curr.column} ${curr.operator} '${curr.value}'`;
  }, sql);

  const [users] = await database.query(sqlWhere);
  if (users.length > 0) {
    return res.send(users);
  } else {
    return res.send({ message: "No users found" });
  }
};

const getUser = async (req, res) => {
  console.log('test');
  const [user] = await database
    .query("SELECT * FROM users WHERE id = ?", [req.params.id])
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });

  if (user.length > 0) {
    return res.send(user[0]);
  } else {
    return res.status(404).send({ error: "User not found" });
  }
};

const createUser = async (req, res) => {
  const { username, country } = req.body;
  const [user] = await database
    .query("INSERT INTO users (username, country) VALUES (?, ?)", [
      username,
      country,
    ])
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error inserting data into database");
    });

  return res.location(`/api/users/${user.insertId}`).sendStatus(201);
};

const updateUser = async (req, res) => {
  const { username, country } = req.body;
  const id = parseInt(req.params.id);
  const [user] = await database
    .query("UPDATE users SET username = ?, country = ? WHERE id = ?", [
      username,
      country,
      id,
    ])
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error updating data in database");
    });

  if (user.affectedRows > 0) {
    return res.sendStatus(204);
  } else {
    return res.status(404).send({ error: "User not found" });
  }
};

const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const [user] = await database
    .query("DELETE FROM users WHERE id = ?", [id])
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting data from database");
    });

  if (user.affectedRows > 0) {
    return res.sendStatus(204);
  } else {
    return res.status(404).send({ error: "User not found" });
  }
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
