var mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URL);
var db = mongoose.connection
db.on('connected', () => {
    console.log('Mongo has connected succesfully')
})

db.on('reconnected', () => {
    console.log('Mongo has reconnected')
});

db.on('error', error => {
    console.log('Mongo connection has an error', error)
    mongoose.disconnect();
});

db.on('disconnected', () => {
    console.log('Mongo connection is disconnected')
})
module.exports = db