const mysql = require('mysql2');
// const fs = require('fs');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE,
    port: process.env.PORT 
//     connectionLimit: 10,
//     connectTimeout: 20000,
//     multipleStatements: true,
//     ssl: {
//         ca: fs.readFileSync('./ca.pem')
//     },
// enableKeepAlive: true,
// keepAliveInitialDelay: 10000
    
})

db.connect((err)=>{
    if (err){
        console.log(err)
    }else{
        console.log("working")
    }
})


module.exports = db


