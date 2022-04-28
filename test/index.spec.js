const request = require('supertest')
const app= require("../src/index.js")

describe('App run check', ()=>{

    it("Api is running returns status 200", (done)=>{

        request(app)
        .get("/")
        .expect(200,done)

    })

})