const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.get('/scrape', () => {
    url = 'http://www.imdb.com/title/tt1229340/'

    request(url, (error, response, html) => {

        if (!error) {

            var $ = cheerio.load(html);

            var title,
                release,
                rating;

            var json = {
                title: "",
                release: "",
                rating: ""
            };

            $('.header').filter(function() {

                let data = $(this);

                title = data.children().first().text();

                release = data.children().last().children().text();

                json.release = release;

                json.title = title;

            })

        }

        fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err) {
            console.log('File successfully written! - Check your project directory for the output.json file');
        });

    });
    res.send('Check your console');

})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;
