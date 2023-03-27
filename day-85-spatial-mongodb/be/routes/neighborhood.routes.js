const { Router } = require("express");
const { getNeighborhood } = require("../controllers/neighborhood.controller");

const route = Router();

route.get("/list", getNeighborhood);

module.exports = route;
