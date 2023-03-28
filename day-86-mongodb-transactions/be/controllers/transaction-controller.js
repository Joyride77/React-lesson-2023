const User = require("../models/User");
exports.createTransaction = async (req, res) => {
  try {
    const session = await User.startSession();
    session.startTransaction();
    const product = await product.updateOne(
      {
        _id: "64225e45acb1362a64a58f59",
      },
      {
        $inc: { quantity: -2 },
      },
      { session }
    );
    const user = await User.create(req.body.user, { session });
    const shippingAddress = await shippingAddress.create(
      req.body.shippingAddress,
      { session }
    );
    await session.commitTransaction();
    session.endSession();
    res.json({ status: true, user, shippingAddress });
  } catch (error) {
    res.json({ status: false, error });
  }
};

exports.createTransactionWithoutSession = async (req, res) => {
  try {
    const product = await product.updateOne(
      {
        _id: "64225e45acb1362a64a58f59",
      },
      {
        $inc: { quantity: -2 },
      }
    );
    const user = await User.create(req.body.user);
    const shippingAddress = await shippingAddress.create({
      address: req.body.shippingAddress,
      user_id: user._id,
    });
    res.json({ status: true, user, shippingAddress, product });
  } catch (error) {
    res.json({ status: false, error });
  }
};
