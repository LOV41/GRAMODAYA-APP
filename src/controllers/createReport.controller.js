const {Request, Response} =  require("express")
const { Http400Error } = require("../errors/BaseError.js")
const Report = require("../model/report.model.js")
// const {priceInKgConverter} = require("../utils/utils")

/**
 * @param {Request} req
 * @param {Response} res
 */
module.exports = async function createReportController(req, res){

    console.log(req.body)   

    const {convFctr, price, cmdtyID, cmdtyName, userID, marketID, marketName, marketType} = req.body.reportDetails
    console.log(convFctr)
    console.log(price)
    console.log(cmdtyName)
    console.log(userID)
    console.log(marketID)
    console.log(marketName)

    // const reportDetails = req.body.reportDetails
    
    try {

        const report = await Report.findOne({marketID: marketID, cmdtyID: cmdtyID})

        if(report != null){
            // console.log("report not null")
            // await Report.findOne({marketID:marketID, cmdtyID:cmdtyID}).then(async value=>{
            //     await value.update({
            //         $push:{"users": userID},
            //         $add: {"totalPrice": price}
            //     }).then(value=>{
            //         return res.status(200).send({
            //             success:"success",
            //             reportID: value._id
            //         })
            //     }).catch(err=>{
            //         console.log(err)
            //     })
            // })
            await Report.updateOne({marketID: marketID, cmdtyID: cmdtyID}, {
                $push:{"users": userID},
                $inc: {"totalPrice": price}
            }).then(value=>{
                console.log(value)
                return res.status(200).send({
                    success:"success",
                    reportID: report._id
                })
            }).catch(err=>{
                throw new Http400Error("Can't save. Please input correct details")
                // console.log(err)
            })
        }
        else{
            //New report
            console.log("Report null")

            // const priceInKg = priceInKgConverter(convFctr, price)

            await new Report({
                users:[userID],
                marketID: marketID,
                marketName:marketName,
                cmdtyID: cmdtyID,
                cmdtyName:cmdtyName,
                priceUnit: "Kg",
                totalPrice: price,
                convFctr: convFctr,
                marketType: marketType
            }).save().then(value=>{
                console.log("report value ", value)
                return res.status(200).send({
                    success:"success",
                    reportID: value._id
                })
            }).catch(err=>{
                throw err
            })
        }


    } catch (error) {
        console.log("Hello people")
        res.status(400).send("Some error in input")
    }

}