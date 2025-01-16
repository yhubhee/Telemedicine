const mysql = require('mysql2');
require('dotenv').config();
const {Pool} = require('pg');


// const dbconfig = databaseUrl.parse(process.env.DATABASE_URL);

// Check if the URL is valid
// Use the parsed values for a MySQL connection
const pool = new Pool({
  host: config.DATABASE_HOST,
  user: config.DATABASE_USER,
  password: config.DATABASE_PASS,
  database: config.DATABASE,
  port: config.Port,
  max: 10, // Maximum number of connections in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000,
});

pool.connect((err, client, release)=>{
    if (err){
        console.error("Not working")
    }else{
        console.log("working");
        release(); 
    }
})

module.exports = pool


// const db = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASS,
//     database: process.env.DATABASE,
//     port: process.env.Port,    
// })

// db.connect((err)=>{
//     if (err){
//         console.log(err)
//     }else{
//         console.log("working")
//     }
// })


// module.exports = db


