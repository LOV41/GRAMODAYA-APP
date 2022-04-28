import request from 'supertest'
import { Http400Error } from '../../src/errors/BaseError'
import app from '../../src/index'

describe('Get Report', ()=>{

    it("get /reports should return 200 when correct reportID query is provided", (done)=>{

        request(app)
        .get("/reports")
        .send({})
        .expect(200,done)

    })

    it("post /reports should return 400 (Bad request) when incorrect/incomplete reportID query is provided", (done)=>{

        request(app)
        .get("/reports")
        .query({reportID: "abc"})
        expect(400,done)

    })

})