require('dotenv').config();
const Influx = require('influx');

// influx
const influx =  new Influx.InfluxDB({
  host: process.env.DB_HOST,
  database: 'hoya_moisture',
  username:process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});


module.exports = influx;
