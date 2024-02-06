const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const port = 3000;
var cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const ImageModel = require("./model");
const RoomModel = require("./roomModel");
const User = require("./person");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

mongoose
  .connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("db is connected"))
  .catch((err) => console.log(err, "something went wrong"));

// storage
const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("img");
app.get("/getall", async (req, res) => {
  try {
    const data = await ImageModel.find();
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/rooms/:id", async (req, res) => {
  try {
    const data = await ImageModel.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const newImage = new ImageModel({
        name: req.body.name,
        image: req.body.image,
        size: req.body.size,
        avilable: req.body.avilable,
        price: req.body.price,
        review: req.body.review,
      });
      newImage
        .save()
        .then(() => {
          res.send("succesfull");
        })
        .catch((err) => console.log(err));
    }
  });
});
//              *****************************************************************************
app.get("/room", async (req, res) => {
  try {
    const data = await RoomModel.find();
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/room/:id", async (req, res) => {
  try {
    const data = await RoomModel.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/room", (req, res) => {
  const newRoom = new RoomModel({
    name: req.body.name,
    image: req.body.image,
    city: req.body.city,
    price: req.body.price,
    rating: req.body.rating,
    review: req.body.review,
    type: req.body.type,
    food: req.body.food,
    wifi: req.body.wifi,
  });
  newRoom
    .save()
    .then(() => {
      res.send("succesfull");
    })
    .catch((err) => console.log(err));
});
//              *****************************************************************************
app.post("/reg", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const encryptedUserPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username: username,
      email: email,
      password: encryptedUserPassword,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN,
      {
        expiresIn: "5h",
      }
    );

    
    user.token = token;

    user.save().then(res.send("sucessfull"));
  } catch (error) {
    console.log(error);
  }
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN,
        {
          expiresIn: "5h",
        }
      );
      const cookieOptions = {
        expires:new Date(
          Date.now() + 90 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
      };
      
      user.token = token;

      res.cookie('jwt', token, cookieOptions)
      
      res.send(true).status(200);
    }else{
      res.send(false).status(404);
    }
  } catch (error) {
    console.log(error);
  }
});
app.get("/user", async (req, res) => {
  try {
    const data = await User.find();
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log("server started on 3000");
});
