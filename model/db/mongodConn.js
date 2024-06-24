import { connect } from 'mongoose';
import { config } from 'dotenv';

config();
const uri = `${process.env.MONGODB_URI}/workoDb`;

function MongoDBConnect() {
  return connect(uri);
}

export { MongoDBConnect };
