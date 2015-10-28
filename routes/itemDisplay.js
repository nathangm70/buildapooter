var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('itemDisplay',
        { title: 'Build A Pooter' });
});

router.post('/', function(req, res){

    //now we need to save this part in the right thing
    switch(req.body.parttype){
        case 'Computer Case':
            req.session.computercase = JSON.parse(req.body.selectedPart);
            break;
        case 'Mother Board':
            req.session.motherboard = JSON.parse(req.body.selectedPart);
            break;
        case 'Ram':
            req.session.ram = JSON.parse(req.body.selectedPart);
            break;
        case 'Graphics Card':
            req.session.graphicscard = JSON.parse(req.body.selectedPart);
            break;
        case 'Hard Drive':
            req.session.harddrive = JSON.parse(req.body.selectedPart);
            break;
        case 'Power Supply':
            req.session.powersupply = JSON.parse(req.body.powersupply);
            break;
        case 'Disc Drive':
            req.session.discdrive = JSON.parse(req.body.selectedPart);
            break;
    }

    res.render('buildAPooter', {
        title: 'Build A Pooter', computercase: req.session.computercase,
        motherboard: req.session.motherboard, ram: req.session.ram,
        graphicscard: req.session.graphicscard, harddrive: req.session.harddrive,
        powersupply: req.session.powersupply, discdrive: req.session.discdrive
    });
});

module.exports = router;