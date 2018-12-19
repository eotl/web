const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use('/web', express.static(path.join(__dirname, '/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
})

app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})