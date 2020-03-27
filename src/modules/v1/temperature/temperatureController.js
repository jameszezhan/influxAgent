const temperatureCtr = {};
const influxAgent = require('../../../influxDBAgent');

temperatureCtr.getList = (req, res) => {
    let limit = req.params.limit ? req.params.limit : 10;
    let sensor = req.params.sensor ? req.params.sensor : null;
    let query = `select * from temperature where sensor = 'sensorA' limit ${limit}`;
    if(sensor){
        query = `select * from temperature where sensor = '${sensor}' limit ${limit}`;
    }
    influxAgent
        .query(query)
        .then(result => {
            return res.status(200).json({message: "query success", data: result});
        })
        .catch(error => res.status(400).json({message: "request failed", data: error}))

    // return res.status(200).json({ message: "getting list of temperature", data: readings});
}

temperatureCtr.addPoint = (req, res) => {
    let temperatureLevel = req.body.reading;
    let sensor = req.body.sensor;
    influxAgent.writePoints([
        {
            measurement:"temperature",
            tags:{
                sensor:sensor
            },
            fields:{
                temperature:temperatureLevel
            }
        }
    ])
    return res.status(200).json({ message: "wring temperature point"});
}

module.exports = temperatureCtr;
