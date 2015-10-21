var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('itemDisplay',
        { title: 'Build A Pooter' });
});

router.post('/', function(req, res){
    console.log('what did we pick');
    //get the item here
    console.log(req.body.selectedPart);

    //save the part we selected here :D
    

    res.render('buildAPooter',
        {title: 'Build A Pooter'});
});

module.exports = router;