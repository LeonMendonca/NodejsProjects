import express from 'express';

import { reqHandler } from './routes/reqHandler.js';
import { MongoDBConnect } from './model/db/mongodConn.js';

const app = express();

app.use(express.json());

app.use('/',reqHandler);

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

