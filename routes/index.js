const express = require('express');
const Urls = require('../models/urls')
const Users = require('../models/users')

router = express.Router();

router.get('/', async (req, res)=>{
    const data = await Users.findOne({
       include : [{
        model : Urls,
        where : {owner : 1},
        attributes : ['id', 'url', 'title']
       }],
       attributes : ['id', 'firstName']
       
    })

    res.json({data : data});
})

module.exports = router;