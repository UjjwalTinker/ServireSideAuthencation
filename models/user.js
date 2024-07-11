const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    role:{
      type:String,
      required:true ,
      defalut :"NORMAL",
   },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MODEL = mongoose.model("model", UserSchema);

module.exports = MODEL;
