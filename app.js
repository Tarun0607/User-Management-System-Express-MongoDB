const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/CRUDMong'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connected...')
})

app.use(express.json())

const crud_router = require('./routes/users')
app.use('/users',crud_router)


app.listen(9000, function(){
    console.log('Server listening at port 9000...')
});