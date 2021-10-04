const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");
const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    loadClass: true,
    validate: [isEmail, "Please Enter valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter a password"],
    minlength: [6, "Minimun Password length is 6"],
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("Incorrect Password");
  }
  throw Error("Incorrect Email");
};
const Users = new mongoose.model("user", userSchema);
module.exports = Users;
