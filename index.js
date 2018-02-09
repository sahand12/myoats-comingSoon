const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  return res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8083, function () {
  console.log('server is running on port 8082');
});
