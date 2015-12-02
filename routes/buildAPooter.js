var express = require('express');
var router = express.Router();

var itemSearchHelper = require('../ItemSearch/AmazonItemSearcher');
var NewComputerPart = require('../Objects/ComputerPart');

/* GET home page. */
var awsCredentials = require('../../amazonInfo.json');
router.get('/', function(req, res, next) {
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

router.post('/', function(req, res){
    itemSearchHelper.searchForItemNamed(req.body.search, function(err, results){
        var items = ItemSearchCallback(err, results);
        res.render('itemDisplay', {items: items, part: req.body.search, user: req.session.user});
    });
});

function ItemSearchCallback(err, results){
    var parts = [];

    for (var i = 0; i < results.ItemSearchResponse.Items[0].Item.length; i++) {

        var part = NewComputerPart();

        //grab the name and the title of the item
        //compCase.name = results.ItemSearchResponse.Items[0].Item[i].Name;
        part.title = results.ItemSearchResponse.Items[0].Item[i].ItemAttributes[0].Title[0];
        part.aSIN = results.ItemSearchResponse.Items[0].Item[i].ASIN[0];

        part.partName = results.ItemSearchResponse.Items[0].Item[i].ItemAttributes[0].Label[0];

        //grab the price
        //check that there is a price here
        if (results.ItemSearchResponse.Items[0].Item[i].OfferSummary[0].LowestNewPrice) {
            part.price = results.ItemSearchResponse.Items[0].Item[i].OfferSummary[0].LowestNewPrice[0].FormattedPrice[0];
            if (part.numPrice = results.ItemSearchResponse.Items[0].Item[i].OfferSummary[0].LowestNewPrice[0].Amount)
            {
                part.numPrice = results.ItemSearchResponse.Items[0].Item[i].OfferSummary[0].LowestNewPrice[0].Amount[0];
            }
            else
            {
                console.log("FUCK");
            }
        }
        else if (results.ItemSearchResponse.Items[0].Item[i].OfferSummary[0].LowestUsedPrice) {
            part.price = results.ItemSearchResponse.Items[0].Item[i].OfferSummary[0].LowestUsedPrice[0].FormattedPrice[0];

            if (part.numPrice = results.ItemSearchResponse.Items[0].Item[i].OfferSummary[0].LowestUsedPrice[0].Amount)
            {
                part.numPrice = results.ItemSearchResponse.Items[0].Item[i].OfferSummary[0].LowestUsedPrice[0].Amount[0];
            }
            else
            {
                console.log("FUCK");
            }
        }
        else{
            //something really bad happened and we need to find a way to deal with this later
            part.price = 'Not Avaliable';
            part.numPrice = 'Not Available';
        }

        //finaly grab all 3 images
        part.smallImage = results.ItemSearchResponse.Items[0].Item[i].SmallImage[0].URL[0];
        part.mediumImage = results.ItemSearchResponse.Items[0].Item[i].MediumImage[0].URL[0];
        part.largeImage = results.ItemSearchResponse.Items[0].Item[i].LargeImage[0].URL[0];

        //once we have everything push this item into the array
        parts.push(part);
    }
    //now that we have our parts array populated lets return this
    return parts;

}

module.exports = router;
