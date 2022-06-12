const express = require('express');
const path = require('path');

// sequelize import
const { sequelize } = require('./models');

const route = require('./routes')


const app = express();

// sequelize 실행
sequelize.sync({force : false})
    .then(()=>{
        console.log("Database connected")
    })
    .catch((err)=>{
        console.error(err);
    })

app.set('port', process.env.PORT || 4999);

app.use('/', route);

app.listen(app.get('port'), ()=>{
    console.log("Server is on ", app.get('port'));
})