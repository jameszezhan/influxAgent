'use strict';

const express = require('express');
const Influx = require('influx');
const http = require("http");
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.use("/api/v1", require("./src/routes/v1"));

// By deafult, I set the node application to listen to 0.0.0.0.
// Which means, this node application will calls from all interfaces.
// This allows users to access this app from docker host (curl localhost:49160)
// In production however, this should be limited to the interfaces that are allowed.
app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
