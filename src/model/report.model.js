var mongoose = require("mongoose")

const ReportSchema = new mongoose.Schema({
    // userID:{
    //     type:String,
    //     required:true
    // },
    marketID:{
        type:String,
        required:true
    },
    marketName:{
        type:String,
        required:true
    },
    cmdtyID:{
        type:String,
        required:true
    },
    marketType:{
        type:String,
        required:true
    },
    cmdtyName:{
        type:String,
        required:true
    },
    priceUnit:{ 
        type:String,
        default:"Kg",
        enum:["Kg","Quintal","Ton","Bag","g","mg"]
    },
    convFctr:{ //In kg
        type:Number,
        default:1 //If this is 0, then Price/0 (Indeterminancy will occur)
    },
    totalPrice:{ //In Rupees
        type:Number,
        default:0
    },
    users:{
        type:[String],
        required:true
    }
},{timestamps:true})

const Report =  mongoose.model("Report", ReportSchema)
module.exports = Report
