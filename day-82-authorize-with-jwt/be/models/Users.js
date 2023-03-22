const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;

// module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
