require('dotenv').config();
module.exports = {
    database:{
        host: process.env.HOST,
        port: process.env.PORTDB,
        user: process.env.USERDB,
        password: process.env.PASSWORDDB,
        database: process.env.DATABASE,
        connectionLimit: process.env.ConecLimit
    }
};