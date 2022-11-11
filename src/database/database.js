import mysql from 'promise-mysql';

import config from './../config'

console.table(config);

const connection = mysql.createConnection({

    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password 
  });

    
  
console.log("1");

const getConnection = () => {    
    console.log("2");
    return connection;
};

module.exports = {
 
    getConnection
};
