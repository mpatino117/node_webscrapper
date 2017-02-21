var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var url = 'https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd/index.shtml';
var json = {};

request(url, function(err, resp, body) {
    $ = cheerio.load(body);
    title = $('#title').text();
    ptsdDefintion = $('#part_145371').html().trim();

    json = {
        title: title,
        ptsd: ptsdDefintion
    };

    json = JSON.stringify(json);

    fs.writeFile('myjsonFile.json', json, 'utf8', function() {
        console.log('check data file');
    });
});
