const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mercury/-68',
    database: 'web'
})

connection.connect(err => {
    if(err){
        console.log("Error de conexión", err)
    }else{
        console.log("Conectado a MySQL")
    }
})

module.exports = connection