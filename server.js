const express = require('express');
const path = require('path');
const data = require('./db/db.json')
const app = express();
const PORT = process.env.PORT || 3001;

const { v4: uuidv4 } = require('uuid');
let notes = [];

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/404.html'))
);


app.get('/api/notes', (req, res) => {
  res.json(data);
})

app.post('/api/notes', (req, res) => {
  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text
  };
  notes.push(newNote);
  res.json(newNote);
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);