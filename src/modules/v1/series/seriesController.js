
const seriesCtr = {};

seriesCtr.getList = (req, res) => {
    return res.status(200).json({ message: "getting list of SERIES"});
}

seriesCtr.addPoint = (req, res) => {
    return res.status(200).json({ message: "Finished writing"});
}

module.exports = seriesCtr;



