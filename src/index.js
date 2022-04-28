const express = require("express")
const errorMiddleware = require("./middlewares/error.middleware.js")
const FullRoutes = require("./routes/index.routes.js")

const ErrorHandler = require("./errors/ErrorHandler")

require("./config/mongodb.js")

require('dotenv').config()

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

FullRoutes(app)

app.use(errorMiddleware)

process.on("unhandledRejection", (reason)=>{
    throw reason //neeche wale process catch kar lega isse.
})

process.on("uncaughtException", async (error)=>{
    await ErrorHandler.handleError(error)
})

const PORT = process.env.NODE_PORT

app.listen(PORT, ()=>{
    console.log(`App is listenining on port ${PORT}`)
})

module.exports = app