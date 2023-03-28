const { Router } = require("express");
const {
  createTransaction,
  createTransactionWithoutSession,
} = require("../controllers/transaction-controller");

const route = Router();

route.post("/shipping", createTransaction);
route.post("/shippingWithoutTransaction", createTransactionWithoutSession);

module.exports = route;
