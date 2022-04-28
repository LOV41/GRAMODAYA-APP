const {BaseError} = require("./BaseError")
const logger = require("../utils/logger.js")
// import { NextFunction, Response } from "express"
// const express = require("express")

module.exports = class ErrorHandler{

    /**
     * 
     * @param {Error} error
     * @returns {boolean}
     */
    static isTrustedError(error){
        if (error instanceof BaseError) {
            return error.isOperational
        }
        return false
    }

    /**
     * 
     * @param {Error} error 
     */
    static async handleError(error){
        logger.error(error)

        if(!this.isTrustedError(error)){
            process.exit(1)
        }
    }


    /**
     * 
     * @param {Error} err 
     * @param {Response} res 
     * @param {NextFunction} next 
     * @returns 
     */
    static async handleKnownError(err, res, next){
        console.log("hello are you hereklsdfk;osdjflskdfjkkkkkkkkkkkk")
        if(!this.isTrustedError(err)){
            return next(err) //Throws this error to unhandled rejection or uncaught exception
        }

        if(err instanceof BaseError){
            console.log(err.httpCode)
            return res.status(err.httpCode).send(err.message)
        }
    }
}