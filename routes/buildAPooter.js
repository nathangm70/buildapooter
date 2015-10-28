var express = require('express');
var router = express.Router();

var itemSearchHelper = require('../ItemSearch/AmazonItemSearcher');
var NewComputerPart = require('../Objects/ComputerCase');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('we should display: ' + req.session.computercase);
    res.render('buildAPooter', {
        title: 'Build A Pooter', computercase: req.session.computercase,
        motherboard: req.session.motherboard, ram: req.session.ram,
        graphicscard: req.session.graphicscard, harddrive: req.session.harddrive,
        powersupply: req.session.powersupply, discdrive: req.session.discdrive
    });
});

router.post('/', function(req, res){
    console.log('i think we did it boys');
    itemSearchHelper.searchForItemNamed(req.body.search, function(err, results){
        var items = ItemSearchCallback(err, results);
        res.render('itemDisplay', {items: items, part: req.body.search});
    });
});

function ItemSearchCallback(err, results){

    var parts = [];
    //console.log(results.ItemSearchResponse.Items[0].Item[0].ItemAttributes[0]);
    for (var i = 0 ; i < results.ItemSearchResponse.Items[0].Item.length; i++){

        var part = NewComputerPart();


        //grab the name and the title of the item
        //compCase.name = results.ItemSearchResponse.Items[0].Item[i].Name;
        console.log('title ' + results.ItemSearchResponse.Items[0].Item[i].ItemAttributes[0].Title[0]);
        part.title = results.ItemSearchResponse.Items[0].Item[i].ItemAttributes[0].Title[0];
        //console.log('part name ' + results.ItemSearchResponse.Items[0].Item[i].ItemAttributes[0].Label[0]);
        //part.partName = results.ItemSearchResponse.Items[0].Item[i].ItemAttributes[0].Label[0];
        //grab the price
        console.log('price ' + results.ItemSearchResponse.Items[0].Item[i].OfferSummary[0].LowestNewPrice[0].FormattedPrice[0]);
        part.price = results.ItemSearchResponse.Items[0].Item[i].OfferSummary[0].LowestNewPrice[0].FormattedPrice[0];
        //finaly grab all 3 images
        console.log('small image ' + results.ItemSearchResponse.Items[0].Item[i].SmallImage[0].URL[0]);
        part.smallImage = results.ItemSearchResponse.Items[0].Item[i].SmallImage[0].URL[0];
        console.log('meduim image ' + results.ItemSearchResponse.Items[0].Item[i].MediumImage[0].URL[0]);
        part.mediumImage = results.ItemSearchResponse.Items[0].Item[i].MediumImage[0].URL[0];
        console.log('large image ' + results.ItemSearchResponse.Items[0].Item[i].LargeImage[0].URL[0]);
        part.largeImage = results.ItemSearchResponse.Items[0].Item[i].LargeImage[0].URL[0];

        //once we have everything push this item into the array
        parts.push(part);
    }
    //now that we have our parts array populated lets return this
    return parts;
}

module.exports = router;
