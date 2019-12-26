require('dotenv').config
const Influx = require('influx');

// influx
const influx =  new Influx.InfluxDB({
  host: 'localhost',
  database: 'temp5',
  schema: [
    {
      measurement: 'temperature',
      fields: {
        temp: Influx.FieldType.FLOAT
      },
      tags: [
        'unit', 'location'
      ]
    }
  ],
  username:process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

module.exports = influx;
