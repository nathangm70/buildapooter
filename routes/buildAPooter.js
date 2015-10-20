var express = require('express');
var router = express.Router();

var itemSearchHelper = require('../ItemSearch/AmazonItemSearcher');

var NewCompCase = require('../Objects/ComputerCase');

//do a console log i really dunno what is happening here
console.log('Building a Pooter');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('buildAPooter',
        { title: 'Build A Pooter' });
});

router.post('/', function(req, res){
    console.log('i think we did it boys');
    itemSearchHelper.searchForItemNamed(req.body.search, ItemSearchCallback);
});

function ItemSearchCallback(err, results){
    console.log(results.ItemSearchResponse.Items[0].Item[0].MediumImage[0].URL[0]);
    console.log(results.ItemSearchResponse.Items[0].Item[0].ItemAttributes[0].Title[0]);



    var compCases = [];

    //console.log(results.ItemSearchResponse.Items[0].Item.length);

    for (var i = 0 ; i < results.ItemSearchResponse.Items[0].Item.length; i++){

        var compCase = NewCompCase();

        compCase.image = results.ItemSearchResponse.Items[0].Item[i].MediumImage[0].URL[0];
        compCase.title = results.ItemSearchResponse.Items[0].Item[i].ItemAttributes[0].Title[0];
        console.log(compCase);
        compCases.push(compCase, i);
    }

    console.log(compCases[0]);
    
}

module.exports = router;
