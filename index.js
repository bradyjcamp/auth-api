'use strict';

require('dotenv').config();
const app = require('./auth-server/src/server.js');
const { db } = require('./src/models');

db.sync().then(() => {
  app.start(process.env.PORT || 3001);
});


// 'use strict'; ---api server

// const { db } = require('./src/models');
// const server = require('./src/server.js');

// db.sync().then(() => {
//   server.start(3000);
// });
