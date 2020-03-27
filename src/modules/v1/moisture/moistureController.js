const moistureCtr = {};
const influxAgent = require('../../../influxDBAgent');

moistureCtr.getList = (req, res) => {
    let limit = req.params.limit ? req.params.limit : 10;
    let sensor = req.params.sensor ? req.params.sensor : null;
    let query = `select * from moisture where sensor = 'sensorA' limit ${limit}`;
    if(sensor){
        query = `select * from moisture where sensor = '${sensor}' limit ${limit}`;
    }
    influxAgent
        .query(query)
        .then(result => {
            return res.status(200).json({message: "query success", data: result});
        })
        .catch(error => {
            console.log(error);

            return res.status(400).json(error.stack);
        })

    // return res.status(200).json({ message: "getting list of moisture", data: readings});
}

moistureCtr.addPoint = (req, res) => {
    let moistureLevel = req.body.reading;
    let sensor = req.body.sensor;
    influxAgent.writePoints([
        {
            measurement:"moisture",
            tags:{
                sensor:sensor
            },
            fields:{
                moisture:moistureLevel
            }
        }
    ])
    return res.status(200).json({ message: "wring moisture point"});
}

module.exports = moistureCtr;
