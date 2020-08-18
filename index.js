const express = require('express'),
      http = require('http'),
      bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3001;

const indexRouter = require('./routes/index');
const dishRouter = require('./routes/dishRuouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const app = express.Router();

app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/dishes', dishRouter);
app.use('/promos', promoRouter);
app.use('/leaders', leaderRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});