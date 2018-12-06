require("dotenv").config();


const bodyParser = require("body-parser")
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
