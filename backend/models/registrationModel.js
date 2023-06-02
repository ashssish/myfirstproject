const mongoose = require("mongoose");

const userRegistrationSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, trim: true },
    username: { type: String, require: true, trim: true },
    email: { type: String, require: true, trim: true, unique: true },
    password: { type: String, require: true, trim: true },
    mobile: { type: String, require: true, trim: true },
    user_type: { type: String, enum: ["User", "Admin"], default: "User" },
    is_varified: { type: Number, status_code: [0, 1], default: 0 },
    user_role: {
      type: String,
      enum: ["User", "Student", "Teacher"],
      default: "User",
    },
  },
  {
    timestamps: true,
  }
);

const userRegistrationModel = mongoose.model("user", userRegistrationSchema);
module.exports = userRegistrationModel;
