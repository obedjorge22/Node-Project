const express = require('express');
const sequelize = require('./database/database');
const User = require('./models/User');
const app = express();
const port = 3000;

async function startServer() {
   try {
     await sequelize.authenticate();
     console.log("Connected to the database.");
   } catch (error) {
     console.error("Unable to connect to the database:", error);
   }
}

startServer();

app.use(express.json());

app.post("/users", (req, res) => {
  const { email, firstName, lastName } = req.body;
  User.create({ email, firstName, lastName })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// 🔹 READ (todos)
app.get("/users", (req, res) => {
  User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// 🔹 READ (por id)
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  User.findByPk(userId)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

//  UPDATE
app.put("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const {email, firstName, lastName } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.update({ email, firstName, lastName });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

    // DELETE
app.delete("/users/:id", async (req, res) => {
  const userId = req.params.id;
   const user = await User.findByPk(userId)
     if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
    user.destroy()
    .then(() => {
        res.json({ message: "User deleted successfully" });
    })
    .catch((error) => {        res.status(500).json({ error: error.message });
    });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




