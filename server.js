const express = require('express');
const path = require('path');
const data = require('./db/db.json')
const app = express();
const PORT = 3001;

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
  res.send(data);
  console.log(data);
})

app.post('/api/notes', (req, res) => {
  res.send(data);
  console.log(data);
})

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);