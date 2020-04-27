const express = require('express');
const router = express.Router();
const request = require('request');
var keyword_extractor = require("keyword-extractor");
let newResult = []

router.get('/', (req, res) => {
    console.log('in get server');
    request(`https://stackoverflow.com/`, function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        newResult = keyword_extractor.extract(body, {
            language: "english",
            remove_digits: true,
            return_changed_case: true,
            remove_duplicates: false

        });


    });

    res.send(newResult);
});

module.exports = router;

