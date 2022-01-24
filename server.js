const express = require("express");
//require("dotenv").config();
const hbs = require("hbs");
const platos = require("./models/platos");

//app
const app = express();

//middlewares
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/components");

//route
app.get("/", (req, res) => {
	res.render("main", platos);
});
//port
const port = process.env.PORT || 3000;
//server
const server = app.listen(port, () => {
	console.log(`Servidor corriendo en http://localhost:${port}`);
});
