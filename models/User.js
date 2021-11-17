const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  book_id: {
    type: String,
  },
});

const schema = new mongoose.Schema(
  { name: String },
  { writeConcern: { w: "majority", j: true, wtimeout: 1000 } }
);

module.exports = mongoose.model("Users", userSchema);
// module.exports = mongoose.model(schema);
