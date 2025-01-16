const mysql = require('mysql2');
const databaseUrl = require('database-url');
require('dotenv').config();


const config = databaseUrl.parse(process.env.DATABASE_URL);

console.log(config);

// Use the parsed values for a MySQL connection
const db = mysql.createPool({
  host: config.host,
  user: config.username,
  password: config.password,
  database: config.database,
  port: config.port,
  waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 90000 
});

db.getConnection((err, connection)=>{
    if (err){
        console.log(err)
    }else{
        console.log("working");
        connection.release(); 
    }
})

module.exports = db.promise()



// const db = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASS,
//     database: process.env.DATABASE,
//     port: process.env.PORT,    
// })

// db.connect((err)=>{
//     if (err){
//         console.log(err)
//     }else{
//         console.log("working")
//     }
// })


// module.exports = db


