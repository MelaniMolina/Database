const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://0.0.0.0:27017';

const connection = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("Database is connected");
    return mongoose.connection;
  } catch (error) {
    console.log(error);
  }
}

module.exports = connection;
