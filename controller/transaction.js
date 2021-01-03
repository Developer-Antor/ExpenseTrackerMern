const Transaction = require("../modals/Transaction");

//@desc:Get All Transaction
//@route:/api/v1/transactions
//@access public
exports.getTransaction = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).send(transactions);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//@desc:Add A Transaction
//@route:Post /api/v1/transactions
//@access public
exports.addtTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);

    return res.status(201).send(transaction);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

//@desc:Delete All Transaction
//@route:/api/v1/transactions/:id
//@access public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ success: false, error: "No Transaction" });
    }

    await transaction.remove();
    return res.status(200).json({
      success: true,
      data: [],
    });
  } catch (error) {
    return res.json({ err: error.message });
  }
};
