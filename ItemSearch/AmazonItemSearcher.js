/**
 * Created by Nathaniel Murray  on 2015-10-14.
 */

/** this "class" will take in a string and preform an item search  it will also take a function in to use as a call back
 * for when it finishes the search
 *
 *
 *** Note the package required for this should be there since i did --save but im not 100% on nodejs yet so if its needed
 * npm install apac@latest --save
 */
var util = require('util');
var OperationHelper = require('apac').OperationHelper;

var awsCredentials = require('../../amazonInfo.json');

var searchHelper = new OperationHelper({
    awsId: awsCredentials.awsId,
    awsSecret: awsCredentials.awsSecret,
    assocId: awsCredentials.assocId,
    //here is where you would put xml2jsOptions if you wanted something custom i dont have anything in here atm
    version: '2013-08-01'
});

//now this is the fucntion where the magic will be happening
function searchForItemNamed(searchWords, callBackFunction){
    //we are going to execute an item search here and set the passed in function to the ball the callback function we want to use
    searchHelper.execute('ItemSearch', {'SearchIndex': 'Electronics', 'Keywords': searchWords, 'ResponseGroup': 'ItemAttributes, Offers, Images'}, callBackFunction);
}

module.exports.searchForItemNamed = searchForItemNamed;