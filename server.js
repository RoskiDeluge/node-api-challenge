const express = require('express');
const projectsRouter = require('./projects/projectsRouter.js');
const actionsRouter = require('./actions/actionsRouter.js');

const helmet = require('helmet');

const server = express();

server.use(express.json());

server.use(helmet());

// server.use('/api/projects', projectsRouter);
// server.use('/api/actions', actionsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's code a Node API</h2>`);
});




module.exports = server;