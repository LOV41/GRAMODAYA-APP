const { default: mongoose } = require('mongoose')
var db = require('../src/config/mongodb')

describe("mongodb connection",()=>{

    // beforeEach = async (done) => {
    //     await mongoose.connect('mongodb://root:example@localhost:27017/');
    //     var db = mongoose.connection
    //     db.on('connected', () => {
    //         console.log('Mongo has connected succesfully')
    //         return done()
    //     })
        
    //     db.on('error', error => {
    //         console.log('Mongo connection has an error', error)
    //         return done(error)
    //     });
    // }

    // it("connected to mongodb connection", async (done)=>{

    //     // before(function (done) {
    //     //     if (db.) { // set app.isDbConnected when connected.
    //     //       process.nextTick(done)
    //     //     } else {
    //     //       db.on('connected', () => done());
    //     //       db.on("error", error=>{
    //     //           done(error)
    //     //       })
    //     //     }
    //     //   });

    //     // db.on("connected", ()=>{
    //     //     console.log('Mongo has connected succesfully2')
    //     //     return done()
    //     // })
    //     // db.on("error",error=>{
    //     //     return done(error)
    //     // })
        
    //     await mongoose.connect('mongodb://root:example@localhost:27017/');
    //     var db = mongoose.connection
    //     db.on('connected', () => {
    //         console.log('Mongo has connected succesfully')
    //         return done()
    //     })
        
    //     db.on('error', error => {
    //         console.log('Mongo connection has an error', error)
    //         return done(error)
    //     });

    // })

})