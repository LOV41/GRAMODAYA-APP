// const express = require("express")
var express = require("express")
var Express = require("express")()
const createReportController = require("../controllers/createReport.controller.js")
const getAggregatedReportController = require("../controllers/getAggregatedReportController.js")

/**
 * 
 * @param {Express} app
 */
const FullUserRoutes = (app) => {

    const router = express.Router()

    router.post("/reports", createReportController)

    router.get("/reports", getAggregatedReportController)

    app.use(router)

    app.get("/",(req, res)=>{
        res.send("<h1>This is the Gramodaya App Web Service Api.</h1>")
    })

}

module.exports = FullUserRoutes