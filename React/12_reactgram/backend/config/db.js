const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
  try {
    const dbCoon = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.8gbcids.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("Conectou ao banco")

    return dbCoon
  } catch (error) {

    console.log(error)
  }
};


conn()

module.exports = conn