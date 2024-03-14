const mongoose = require("mongoose");

const key=process.env.DATABASE_KEY
// Ex: "mongodb+srv://<user>:<pass>@cluster0.fsr0o.mongodb.net/<datavase>?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(key, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("Successfully connected to MongoDB Atlas!"))
  .catch((err) => console.log(err))
};

module.exports = connectDB;
