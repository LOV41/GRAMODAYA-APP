const request = require('supertest')
const { Http400Error } = require('../src/errors/BaseError')
const app = require('../src/index')

describe('Get Report', ()=>{

    it("get /reports should return 200 when correct reportID query is provided", (done)=>{

        request(app)
        .get("/reports")
        .query({reportID: "626aa8abd4f39a95e64e3803" })
        .expect(200,done)

    })

    it("post /reports should return 400 (Bad request) when incorrect/incomplete reportID query is provided", (done)=>{

        request(app)
        .get("/reports")
        .query({reportID: "abc"})
        .expect(400,done)

    })

})