var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3007;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var reservations = [
{
	name: "yoda",
	phoneNumber: "1-800-daf-orce",
	email: "thelightside@jediorder.io",
	uniqueID: 69
},
{
	name: "Scotty",
	phoneNumber: "867-5309",
	email: "theonlypersonthatmatters@everyonesucks.com",
	uniqueID: 22
}]

var waitlist = []

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/tables", function(req, res){
	return res.json(reservations)
})