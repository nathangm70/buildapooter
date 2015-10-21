var express = require('express');
var router = express.Router();

var send = require('send');

var itemSearchHelper = require('../ItemSearch/AmazonItemSearcher');
var NewCompCase = require('../Objects/ComputerCase');
var tempRes, tempReq;

//do a console log i really dunno what is happening here
console.log('Building a Pooter');
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('we about to build a pooter baby');
    res.render('buildAPooter',
        { title: 'Build A Pooter' });
});

router.post('/', function(req, res){
    console.log('i think we did it boys');
    tempReq = req;
    tempRes = res;
    itemSearchHelper.searchForItemNamed(req.body.search, function(err, results){
        var items = ItemSearchCallback(err, results);
        res.render('buildAPooter',{items: items});
    });
});

function ItemSearchCallback(err, results){

    var compCases = [];

    for (var i = 0 ; i < results.ItemSearchResponse.Items[0].Item.length; i++){

        var compCase = NewCompCase();

        compCase.image = results.ItemSearchResponse.Items[0].Item[i].MediumImage[0].URL[0];
        compCase.title = results.ItemSearchResponse.Items[0].Item[i].ItemAttributes[0].Title[0];
        compCases.push(compCase, i);
    }

    return compCases
}

module.exports = router;
