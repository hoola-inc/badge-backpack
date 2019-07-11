
const mongoose = require("mongoose");
const dbUrl = 'mongodb+srv://hoola:123hoola123@cluster0-umhal.mongodb.net/test?retryWrites=true&w=majority'
mongoose.Promise = global.Promise;

mongoose.set("useCreateIndex", true);

// Connecting to the database
mongoose
    .connect(
        dbUrl,
        {
            useNewUrlParser: true
        }
    )
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch(err => {
        console.log("Could not connect to the database. Exiting now...");
        process.exit();
    });