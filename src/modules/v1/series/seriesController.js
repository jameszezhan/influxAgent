
const seriesCtr = {};

seriesCtr.getList = (req, res) => {
    // moistureInfluxModel.getSeries(
    //     {
    //         measurement: 'moisture',
    //         database: "Instance 1"
    //     }
    // ).then(names=>{
    //     console.log(names);
    // })
    return res.status(200).json({ message: "getting list of SERIES"});
}

seriesCtr.addPoint = (req, res) => {
    return res.status(200).json({ message: "Finished writing"});
}

module.exports = seriesCtr;



