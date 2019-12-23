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
  username:"admin",
  password:"admin",
  port: 8086
});




// influx.getDatabaseNames()
//   .then(names=> {
//     if(!names.includes("temp5")){
//       console.log("temp5 does not exist");
//       return influx.createDatabase('temp5')
//     }else{
//       console.log("temp 5 does exits");
//     }
//   })
//   .then(() => {
//     app.listen(app.get('port'), ()=> {
//       console.log(`Listening on ${app.get('port')}`);
//     });
//     influx.writeDataToInflux("hanalei");
//     influx.writeDataToInflux("hilo");
//     influx.writeDataToInflux("honolulu");
//     influx.writeDataToInflux("kahului");
//     http.createServer(app).listen(3100, function(){
//       console.log("Listening on port 3100")
//     })
//   })
//   .catch(error => console.log({ error }));




module.exports = influx;

