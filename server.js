const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

request('http://www.gamestop.com/browse/playstation-4/role-playing?nav=28-xu0,131dc-6a', function(error, response, body) {

    if (error) {
        console.log('Error:' + error);

    }

    var $ = cheerio.load(body);

    $('#wikiArticle').filter(function(){

      var paragraph = $(this).

    });
});
