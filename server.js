const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { config } = require('dotenv');
const router = require('./routes/route.js');
const connect = require('./database/conn.js');
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

app.use('/api', router);

app.get('/', (req, res) => {
  res.json('Quiz Application Server');
});

const port = process.env.PORT || 8080;

connect().then(() => {
  app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`);
  });
}).catch(error => {
  console.log('Invalid Database Connection');
});



myEmitter.setMaxListeners(15); // Increase the limit

// Define event listener functions
const listener1 = () => {
  console.log('Listener 1 executed');
};

const listener2 = () => {
  console.log('Listener 2 executed');
};

// Add event listeners to the emitter
myEmitter.on('event', listener1);
myEmitter.on('event', listener2);

// Emit the event
myEmitter.emit('event');





