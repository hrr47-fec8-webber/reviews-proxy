const express = require('express');
const path = require('path');
const request = require('request');
const app = express();
const port = 7000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/:id', express.static(__dirname + '/lib'));


app.get('/api/images/:id' , (req, res) => {
  request(
    { url: `http://localhost:3001/api/images/${req.params.id}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.get('/api/booking/:id' , (req, res) => {
  request(
    { url: `http://localhost:3002/api/booking/${req.params.id}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.get('/assets/airbnb_rating_star.png' , (req, res) => {
  request(
    { url: `http://localhost:3002/api/booking/${req.params.id}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  )
});
app.get('/api/overall_reviews/:id', (req, res) => {
  request(
    { url: `http://localhost:3000/api/overall_reviews/${req.params.id}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }
      res.json(JSON.parse(body));
    }
  )
});

app.get('/api/individual_reviews/:id' , (req, res) => {
  request(
    { url: `http://localhost:3000/api/individual_reviews/${req.params.id}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  )
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});