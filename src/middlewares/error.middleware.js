const ErrorHandler = require("../errors/ErrorHandler.js") 
// import { NextFunction, Request, Response } from "express";
const log = require("../utils/logger.js")

const {Request, Response, NextFunction} =  require("express")

// https://stackoverflow.com/questions/7310521/node-js-best-practice-exception-handling/36703397#36703397

/**
 * @param {Error} err
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
module.exports =  async(err, req, res, next)=>{
    log.error(err)
    //Why I am using asynchronous here, because maybe multiple errors start popping up and since only one central is accessing it, it can block/or in other words
    //cause jam on it. Hence forbidding myself from using synchronous.
    // await errorHandler(err,res,next)
    // await new ErrorHandler(err,res,next).handleKnownError()

    await ErrorHandler.handleKnownError(err,res,next)
}