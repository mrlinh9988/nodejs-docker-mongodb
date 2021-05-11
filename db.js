const mongoose = require('mongoose');
const MONGO_USERNAME = 'admin';
const MONGO_PASSWORD = 'admin';
const MONGO_HOSTNAME = '45.77.40.186';
const MONGO_PORT = '27017';
const MONGO_DB = 'sharkinfo';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
mongoose.connect(url, {
  dbName: MONGO_DB,
  keepAlive: 1,
  useNewUrlParser: true,
  poolSize: 5,
  useUnifiedTopology: true
}).then(() => {
  console.log('connected mongodb');
}).catch(err => {
  console.log(err)
})