var express = require('express');
var router = express.Router();

var itemSearchHelper = require('../ItemSearch/AmazonItemSearcher');
var NewCompCase = require('../Objects/ComputerCase');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('buildAPooter',
        { title: 'Build A Pooter' });
});

router.post('/', function(req, res){
    console.log('i think we did it boys');
    itemSearchHelper.searchForItemNamed(req.body.search, function(err, results){
        var items = ItemSearchCallback(err, results);
        res.render('itemDisplay', {items: items});
    });
});

function ItemSearchCallback(err, results){

    var compCases = [];

    for (var i = 0 ; i < results.ItemSearchResponse.Items[0].Item.length; i++){

        var compCase = NewCompCase();

        console.log(results.ItemSearchResponse.Items[0].Item[i]);

        //compCase.name = results.ItemSearchResponse.Items[0].Item[i].Name;
        compCase.image = results.ItemSearchResponse.Items[0].Item[i].MediumImage[0].URL[0];
        compCase.title = results.ItemSearchResponse.Items[0].Item[i].ItemAttributes[0].Title[0];
        compCases.push(compCase);
    }

    return compCases
}

module.exports = router;
