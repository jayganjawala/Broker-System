const express = require('express')
const mysql = require('mysql2')

const app = express()
const PORT = 3000

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'broker'
})

db.connect((err)=>{
    if(err){    
    console.error('Error connecting to MySql: ',err)
    return
    }
    console.log('Connected to MySQL database')
})

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})