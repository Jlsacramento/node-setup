import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => res.send('API is only!'));

module.exports = routes;
