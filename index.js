const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  database : 'delta_app',
  password : 'aj1vy4te'
}
);
try{
  connection.query("SHOW TABLES",(err,result)=>{
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
