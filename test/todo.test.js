const todocontroller = require('../controllers/todocontroller');
const httpMocks = require('node-mocks-http');
const pool = require('../comfig/db');

let req, res;

beforeEach(() => {
    pool.query("TRUNCATE todos");
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
  });

describe("todocontroller.get", () => {

    it("has get method", () => {
        expect(typeof todocontroller.get).toBe("function");
    });

    it("it returns empty array in response", async () => {
        await todocontroller.get(req, res);
        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toEqual([]);
      });
})