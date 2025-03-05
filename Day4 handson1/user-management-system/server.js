const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors()); // Enable CORS
app.use(express.json());

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

