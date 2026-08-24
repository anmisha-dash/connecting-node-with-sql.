const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

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
        let count = result[0].count;
        // res.send(`Total users: ${result[0].count}`);
        //home route
        res.render("home.ejs",{count});
        
    });

});

//show route
app.get("/user",(req,res)=>{
    let q = `SELECT * FROM user`;


    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            
            res.send("Some error occurred");
            return;
        }
        else{
            res.send(result);
        }
        
       
        
    });
})

app.listen(8080, () => {
    console.log("app is listening");
});