const request = require('request');

const apiKey = process.env.ZIPCODE_API_KEY ||
    "RiRG8gfTGWWN7cceSBsg4mAr1QLfg7MxsG1sKPxN2OI9gErUfrh3hvVmnoCR42Kb";

const zipCodeURL = process.env.ZIPCODE_API_URL || "https://zipcodeapi.com/rest/";

var distance = {
    find: (req, res, next) => {
        request(zipCodeURL + apiKey +
            '/distance.json/' + req.params.zipcode1 + '/' +
            req.params.zipcode2 + '/mile',
            (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body);
                    res.send({
                        distance: -1
                    });
                }
            });
    }
};

module.exports = distance;