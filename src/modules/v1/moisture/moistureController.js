const moistureCtr = {};
const moistureInfluxModel = require('./moistureModel');

moistureCtr.getList = (req, res) => {
    return res.status(200).json({ message: "getting list of moisture"});
}

moistureCtr.addPoint = (req, res) => {
    moistureInfluxModel.writePoints([
        {
            measurement:"moisture",
            tags:{
                sensor:'sensorA'
            },
            fields:{
                moisture:99
            }
        }
    ])
    return res.status(200).json({ message: "wring moisture point"});
}

module.exports = moistureCtr;



