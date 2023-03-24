const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Enter the first Name"],
  },
  lastname: {
    type: String,
    required: [true, "Enter the last name"],
  },
  email: {
    type: String,
    require: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    require: [true, "Please provide a password!"],
    unique: false,
  },
  phone: {
    type: Number,
    minimum: 0,
  },
  address: {
    type: String,
    required: [true, "Enter the address"],
  },
  userrole: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserRole",
  },
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;

// module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
