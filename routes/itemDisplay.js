 var express = require('express');
var router = express.Router();

var awsCredentials = require('../../amazonInfo.json');

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
            req.session.powersupply = JSON.parse(req.body.selectedPart);
            break;
        case 'Disc Drive':
            req.session.discdrive = JSON.parse(req.body.selectedPart);
            break;
        case 'Processor':
            req.session.processor = JSON.parse(req.body.selectedPart);
            break;
        case 'Monitor':
            req.session.monitor = JSON.parse(req.body.selectedPart);
            break;
        case 'Keyboard':
            req.session.keyboard = JSON.parse(req.body.selectedPart);
            break;
        case 'Webcam':
            req.session.webcam = JSON.parse(req.body.selectedPart);
            break;
        case 'Headset':
            req.session.headset = JSON.parse(req.body.selectedPart);
            break;
        case 'Computermouse':
            req.session.computermouse = JSON.parse(req.body.selectedPart);
            break;
    }

    res.render('buildAPooter', {
        title: 'Build A Pooter', computercase: req.session.computercase,
        motherboard: req.session.motherboard, ram: req.session.ram,
        graphicscard: req.session.graphicscard, harddrive: req.session.harddrive,
        powersupply: req.session.powersupply, discdrive: req.session.discdrive, processor: req.session.processor,
        monitor: req.session.monitor, keyboard: req.session.keyboard, webcam: req.session.webcam,
        headset: req.session.headset, computermouse: req.session.computermouse,
        awsSecret: awsCredentials.awsSecret, assocId: awsCredentials.assocId, awsId: awsCredentials.awsId, user: req.session.user
    });
});

module.exports = router;