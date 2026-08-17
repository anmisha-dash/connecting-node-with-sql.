const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  database : 'delta_app',
  password : 'aj1vy4te'
}
);
//inserting new data
let q = "INSERT INTO user (id,username,email,password) VALUES ?";
let users = [[2,"new_user2","new2@gmail.com","abc2"],
            [3,"new_user3","new3@gamil.com","abc3"]];
try{
  connection.query(q,[users],(err,result)=>{
    if(err){throw err};
  console.log(result);
})
}
catch(err){
  console.log(err);
}



let getRandomUser = ()=> {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}
