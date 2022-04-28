const request = require('supertest')
const { Http400Error } = require('../src/errors/BaseError')
const app = require('../src/index')

describe('Create Report', ()=>{

    it("post /reports should return 200 when correct data is provided", (done)=>{

        request(app)
        .post("/reports")
        .send({
            "reportDetails": {
              "userID": "user-1",
              "marketID": "market-1",
              "marketName": "Vashi Navi Mumbai",
              "cmdtyID": "cmdty-1",
              "marketType": "Mandi",
              "cmdtyName": "Potato",
              "priceUnit": "Pack",
              "convFctr": 50,
              "price": 700
            }
          })
        .expect(200,done)

    })

    it("post /reports should return 400 (Bad request) when incorrect/incomplete data is provided", (done)=>{

        request(app)
        .post("/reports")
        .send({
            "reportDetails": {
              "userID": "user-1",
              "marketID": "market-1",
              "marketName": "Vashi Navi Mumbai",
              "cmdtyID": "cmdty-1",
              "marketType": "Mandi",
              "cmdtyName": "Potato",
              "priceUnit": "Pack",
              "convFctr": 50,
            }
          })
        .expect(400,done)

    })

})