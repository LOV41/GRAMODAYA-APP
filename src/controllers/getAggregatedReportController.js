const {Request, Response} = require('express')
const { Http400Error } = require('../errors/BaseError.js')
const Report = require("../model/report.model.js")

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports = async function getAggregatedReportController(req, res){
    console.log(req.body)
    console.log(req.query)

    const reportID = req.query.reportID

    await Report.findById(reportID).then(value=>{

        if(value == null){
            res.status(400).send("Not found")
        }

        const report = {
            reportDetails:{
                _id:value._id,
                "_id": "949832f8-48c7-4cb2-8dcd-98f046a9a2e3",
                cmdtyName: value.cmdtyName,
                "cmdtyID": value.cmdtyID,
                "marketID": value.marketID,
                "marketName": value.marketName,
                "users": value.users,
                "timestamp": Date.now(),
                "priceUnit": "Kg",
                "price": value.totalPrice/(value.users.length)
            }
        }

        res.status(200).send(report)
        
    }).catch(err=>{
        res.status(400).send("Some wrong input")
    })
}