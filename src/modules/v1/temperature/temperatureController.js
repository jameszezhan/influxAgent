const temperatureCtr = {};

temperatureCtr.getList = (req, res) => {
    return res.status(200).json({ message: "getting list of temperature"});
}

temperatureCtr.addPoint = (req, res) => {
    return res.status(200).json({ message: "writing temp point"});
}

module.exports = temperatureCtr;



