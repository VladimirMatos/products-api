const app = require('./app');
require('dotenv').config();



//Api connection

async function connection() {
    await app.listen(process.env.PORT);
    console.log('Server connect in the port:', process.env.PORT);
}

connection();