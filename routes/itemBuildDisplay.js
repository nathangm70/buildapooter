/**
 * Created by Nathan on 2015-11-30.
 */

var express = require('express');
var router = express.Router();

var awsCredentials = require('../../amazonInfo.json');

router.get('/', function(req, res, next){
    res.render('itemBuildDisplay', {title: 'Build A Pooter', user: req.session.user});
});

router.post('/', function(req, res){
    switch(req.body.parttype) {
        case 'Computer Case':
            req.session.build.computercase = JSON.parse(req.body.selectedPart);
            break;
        case 'Mother Board':
            req.session.build.motherboard = JSON.parse(req.body.selectedPart);
            break;
        case 'Ram':
            req.session.build.ram = JSON.parse(req.body.selectedPart);
            break;
        case 'Graphics Card':
            req.session.build.graphicscard = JSON.parse(req.body.selectedPart);
            break;
        case 'Hard Drive':
            req.session.build.harddrive = JSON.parse(req.body.selectedPart);
            break;
        case 'Power Supply':
            req.session.build.powersupply = JSON.parse(req.body.selectedPart);
            break;
        case 'Disc Drive':
            req.session.build.discdrive = JSON.parse(req.body.selectedPart);
            break;
        case 'Processor':
            req.session.build.processor = JSON.parse(req.body.selectedPart);
            break;
        case 'Monitor':
            req.session.build.monitor = JSON.parse(req.body.selectedPart);
            break;
        case 'Keyboard':
            req.session.build.keyboard = JSON.parse(req.body.selectedPart);
            break;
        case 'Webcam':
            req.session.build.webcam = JSON.parse(req.body.selectedPart);
            break;
        case 'Headset':
            req.session.build.headset = JSON.parse(req.body.selectedPart);
            break;
        case 'Computermouse':
            req.session.build.computermouse = JSON.parse(req.body.selectedPart);
            break;
    }

    console.log('goign back to create build');
    res.render('createBuild', {
        title: 'Build A Pooter', computercase: req.session.build.computercase,
        motherboard: req.session.build.motherboard, ram: req.session.build.ram,
        graphicscard: req.session.build.graphicscard, harddrive: req.session.build.harddrive,
        powersupply: req.session.build.powersupply, discdrive: req.session.build.discdrive, processor: req.session.build.processor,
        monitor: req.session.build.monitor, keyboard: req.session.build.keyboard, webcam: req.session.build.webcam,
        headset: req.session.build.headset, computermouse: req.session.build.computermouse,
        awsSecret: awsCredentials.awsSecret, assocId: awsCredentials.assocId, awsId: awsCredentials.awsId, user: req.session.user
    });

});

module.exports = router;