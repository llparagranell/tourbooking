const mongoose = require("mongoose");

const RoomSchema = mongoose.Schema({

    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    food: {
      type: String,
    },
    wifi: {
      type: Boolean,
    },
});

module.exports = RoomModel = mongoose.model("roomModel", RoomSchema);
