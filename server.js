const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan');
const helmet = require('helmet');


// create express appnpm
const app = express();

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(morgan('dev'));

// using default helmet, for more detail goto: https://helmetjs.github.io/
app.use(helmet());


// Configuring the database
require("./src/config/db.config");
// import all routes at once
// require("./src/utilities/routes.utility")(app);


// define a default route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Badges BackPack" });
});


// server listen for requests
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});