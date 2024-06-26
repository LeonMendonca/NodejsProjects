import express from 'express';
import { resolve } from 'path';

import { reqHandler } from './routes/reqHandler.js';
import { htmlHandler } from './routes/htmlHandler.js';
import { MongoDBConnect } from './model/db/mongodConn.js';

const app = express();

app.use(express.static(resolve('./views')));
app.use(express.static(resolve('./dist')));
app.use(express.json());

app.use('/',reqHandler);
app.use('/',htmlHandler);

//404
app.use(function(req,res) {
  res.send("404");
});

try {
  await MongoDBConnect();
  app.listen(3000,()=> {
    console.log('listening to port 3000\nConnected to Db');
  })
} catch(error) {
  console.log(error.message);
}

