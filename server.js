const express = require('express');
const path = require('path');
const port = process.env.port || 3000;
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.listen(port, function () {
  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});
