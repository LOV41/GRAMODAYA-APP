import request from 'supertest'
import { Http400Error } from '../../src/errors/BaseError'
import app from '../../src/index'

describe('Create Report', ()=>{

    it("post /reports should return 200 when correct data is provided", (done)=>{

        request(app)
        .post("/reports")
        .send({})
        .expect(200,done)

    })

    it("post /reports should return 400 (Bad request) when incorrect/incomplete data is provided", (done)=>{

        request(app)
        .post("/reports")
        .send({})
        expect(400,done)

    })

})