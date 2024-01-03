import mysql from "mysql2";

//init connection to db
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"stock_db",
});

export default db;