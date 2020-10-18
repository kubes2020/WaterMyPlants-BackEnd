const express = require( 'express' );
const helmet = require( 'helmet' );
const cors = require( 'cors' );

const authRouter = require( '../auth/auth-router.js' );
const plantsRouter = require( '../plants/plants-router.js' )
const restricted = require( '../auth/restricted-middleware.js' );
const usersRouter = require( '../users/users-router' );

const server = express();

server.use( helmet() );
server.use( express.json() );
server.use( cors() );

server.use( '/api/auth', authRouter );
server.use( '/api/plants', restricted, plantsRouter );
server.use( '/api/users', usersRouter );

server.get( '/', (req, res) => {
    res.json({ api: 'up' });
});

module.exports = server;