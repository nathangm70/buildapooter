/**
 * Created by natha on 2015-10-20.
 */

var express = require('express');
var router = express.Router();

/* Get request */
router.get('/', function(req, res){
    res.render('itemDisplay',{
        //add extra variables here to use with script tags
    });
});

/* Post request */
router.post('/', function(req, res){
    res.render('itemDisplay',{

    });
});