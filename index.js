const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

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

let q = "INSERT INTO user (id, username, email, password) VALUES ?";

let data = [];

for (let i = 1; i <= 100; i++) {
    data.push(getRandomUser());
}

connection.query(q, [data], (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(result);
    connection.end();
});