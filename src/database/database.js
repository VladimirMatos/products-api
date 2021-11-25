const {database}=require('./key');
const {promisify} =require('util');
const mysql = require('mysql');

const connection = mysql.createPool(database);
connection.getConnection((err,connection) =>{
    if(err.code === 'PROTOCOL_CONNECTION_LOST'){
        console.error('Database connection was closed');
    }
    if(connection) connection.release();
    console.log('Db is connected');
    return
})

//Promisify connection query
connection.query = promisify(connection.query);
module.exports = connection;


