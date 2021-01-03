const express = require("express");
const {
  getTransaction,
  addtTransaction,
  deleteTransaction,
} = require("../controller/transaction");
const router = express.Router();

router.route("/").get(getTransaction).post(addtTransaction);

router.route("/:id").delete(deleteTransaction);

module.exports = router;
