const mongoose = require("mongoose");

// Admin hereglegch bol buh erhtei
// Customer hereglegch bol Admin Panel dotor nevterch chadahgui
// User hereglegch bol zarim neg Admin Panel ustgah, uurchluh esvel uusgeh erhgui

const userRoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the Role Name"],
    unique: true,
  },
});

const UserRole = mongoose.model("userrole", userRoleSchema);

module.exports = UserRole;
