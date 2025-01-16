const mysql = require('mysql2');
require('dotenv').config();


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE,
    port: process.env.Port,    
})

db.connect((err)=>{
    if (err){
        console.log(err)
    }else{
        console.log("working")
    }
})


module.exports = db


