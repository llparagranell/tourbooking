const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  avilable: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

module.exports = ImageModel = mongoose.model("imageModel", ImageSchema);