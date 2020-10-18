const express = require( 'express' );
const helmet = require( 'helmet' );
const cors = require( 'cors' );

const plantsRouter = require('../plants/plants-router.js')
const usersRouter = require('../users/users-router');

const server = express();

server.use( helmet() );
server.use( express.json() );
server.use( cors() );

server.use('/api/plants', plantsRouter);
server.use('/api/users', usersRouter);

server.get( '/', (req, res) => {
    res.json({ api: 'up' });
});

module.exports = server;