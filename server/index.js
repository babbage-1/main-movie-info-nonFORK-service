const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db/index.js');
const PORT = process.env.PORT || 2000;
// CHANGED
app.use('/main/:id', express.static('client/dist'));
// CHANGED
app.use(bodyParser.urlencoded( { extended: true } ))
app.use(bodyParser.json())
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

// get request for movie info
// CHANGED
app.get('/info/:id', (req, res) => {
  // if time, refactor to not use query
  let movieId = req.params.id;
  db.getMovieInfo(movieId, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results[0]);
    }
  })
});

// route for getting movie poster
app.get('/info/:id/poster', (req, res) => {
  let movieId = req.params.id;
  db.getMoviePoster(movieId, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(results);
      res.json(results[0].info.image);
    }
  })
})

app.get('/info/:id/post', (req, res) => {
  console.log('CREATE new item');

  res.status(200).send('Create New Item from POST');
})


app.get('/info/:id/put', (req, res) => {
  console.log('UPDATE old item');

  res.status(200).send('Update New Item from PUT');
})

app.get('/info/:id/delete', (req, res) => {
  console.log('DELETE new item');

  res.status(200).send('DELETE New Item from DELETE');
})

