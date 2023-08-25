//setup mongoose connection

//require mongoose for consts
const { connect, connection } = require('mongoose');

//create connection string including process.env
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialnetworkDB'; 

connect(connectionString)

//export
module.exports = connection;