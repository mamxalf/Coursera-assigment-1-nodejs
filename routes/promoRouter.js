const express = require('express');
const promoRouter = express.Router();

promoRouter.all('/', (req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

promoRouter.get('/', (req, res, next) => {
    res.end('Will send all the promos to you!');
});

promoRouter.post('/', (req, res, next) => {
 res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
});

promoRouter.put('/', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /promos');
});

promoRouter.delete('/', (req, res, next) => {
    res.end('Deleting all ');
});

promoRouter.get('/:promoId', (req,res,next) => {
    res.end('Will send details of the promo: ' + req.params.promoId +' to you!');
});

promoRouter.post('/:promoId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promos/'+ req.params.promoId);
});

promoRouter.put('/:promoId', (req, res, next) => {
  res.write('Updating the promo: ' + req.params.promoId + '\n');
  res.end('Will update the promo: ' + req.body.name +
        ' with details: ' + req.body.description);
});

promoRouter.delete('/:promoId', (req, res, next) => {
    res.end('Deleting promo: ' + req.params.promoId);
});

module.exports = promoRouter;