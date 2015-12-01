/**
 * Created by Nathan on 2015-11-30.
 */

var express =  requre('express');
var router = express.router();

router.get('/', function(req, res, next){
    res.render('itemBuildDisplay', {title: 'Build A Pooter'});
});

router.post('/', function(req, res, next){
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

    res.render('createBuild', {
        title: 'Build A Pooter', computercase: req.build.session.computercase,
        motherboard: req.build.session.motherboard, ram: req.build.session.ram,
        graphicscard: req.build.session.graphicscard, harddrive: req.build.session.harddrive,
        powersupply: req.build.session.powersupply, discdrive: req.build.session.discdrive, processor: req.build.session.processor,
        monitor: req.build.session.monitor, keyboard: req.build.session.keyboard, webcam: req.build.session.webcam,
        headset: req.build.session.headset, computermouse: req.build.session.computermouse
    });

});

module.exports = router;