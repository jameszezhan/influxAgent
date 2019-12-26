require('dotenv').config();
const Influx = require('influx');

// influx
const influx =  new Influx.InfluxDB({
  host: 'localhost',
  database: 'Instance 1',
  schema: [
    {
      measurement: 'moisture',
      fields: {
          moisture: Influx.FieldType.FLOAT
      },
      tags: [
          'sensor'
      ]
    }
  ],
  username:process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});


module.exports = influx;
