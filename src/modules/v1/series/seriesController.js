const seriesCtr = {};
const influxAgent = require('../../../influxDBAgent');

seriesCtr.getList = (req, res) => {
    influxAgent.getSeries(
        {
            measurement: 'moisture',
            database: "hoya_moisture"
        }
    ).then(names=>{
        console.log(names);
    })
    return res.status(200).json({ message: "getting list of SERIES"});
}


module.exports = seriesCtr;
