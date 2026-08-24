const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'aj1vy4te'
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) AS count FROM user`;

    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            res.send("Some error occurred");
            return;
        }

        console.log(result);
        res.send(`Total users: ${result[0].count}`);
    });
});

app.listen(8080, () => {
    console.log("app is listening");
});