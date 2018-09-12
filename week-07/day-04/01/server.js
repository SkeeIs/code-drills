// SERVE UP INDEX AND ADD.HTML IN THIS FILE AT THE PORT OF YOUR CHOICE.
var express = require("express");
var path = require("path");

var app = express();

var PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());