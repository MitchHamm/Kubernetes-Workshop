const bodyParser = require('body-parser');
const express = require('express');
const request = require('request-promise');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/from_db', (req, res) => {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "mysql",
        user: "root",
        password: "root"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

    con.query("USE `node-app-db`", function (err, result) {
        if (err) throw err;
        console.log("Using DB");
    });

    con.query("CREATE TABLE IF NOT EXISTS `greeting` (`id` int(11) unsigned NOT NULL AUTO_INCREMENT,`greeting` varchar(255) DEFAULT NULL,PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=latin1;", function (err, result) {
        if (err) throw err;
        console.log("Using DB");
    });
    con.query("INSERT INTO greeting (greeting) VALUES ('Hello from DB')", function (err, result) {
        if (err) throw err;
        console.log("Using DB");
    });
    var dbrst;

    con.query("SELECT greeting from greeting where id = 1", function(err, result) {
        if(err) throw err;
        res.send(result[0].greeting);
    });
});
module.exports = app;
