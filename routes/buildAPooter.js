var express = require('express');
var router = express.Router();

//do a console log i really dunno what is happening here
console.log('Building a Pooter');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('buildAPooter',
        { title: 'Build A Pooter' });
});

router.post('/', function(req, res){
    console.log('i think we did it boys');
    router.get();
});

module.exports = router;
