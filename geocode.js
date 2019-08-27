/**
 * Geocode addresses for mapping work
 * Very rough attempt, need to develop better
 * async promise to geocode the input addresses,
 * then write the new output data file.

 * Dan Levy offered the following method:
 * https://github.com/justsml/guides/blob/master/mapping/google-geocoder/google-geocoder-example.js

  // From my feedback & code here: https://krzysztofzuraw.com/blog/2017/callbacks-promises-in-js-for-newbies.html
  const geocoder = new google.maps.Geocoder();
  // Most JS API's let you use Bluebird.promisify[All]
  // Unfortunately Google's APIs are a little dumb when it comes to promises and Node callbacks.
  const geocodeAddress = (address) => new Promise((resolve, reject) => geocoder
  .geocode({ address }, (results, status) => status === 'OK'
   ? resolve({
     lat: results[0].geometry.location.lat(),
     lng: results[0].geometry.location.lng(),
   }) : reject(new Error('Cannot find address'))
  }));

*/
// Dependencies
var path = require("path");
var fs = require("fs");
var _ = require("lodash");
var request = require("request");
var queue = require("queue-async");
var pace = require("pace");
var csv = require("d3-dsv").csv;
var apikey = require("./apikey");
var NodeGeocoder = require('node-geocoder');
const util = require('util');

var GOOGLE_API_KEY = apikey.getKey();
var options = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: GOOGLE_API_KEY,
  formatter: null
};

var geocoder = NodeGeocoder(options);

// Inputs
var input = JSON.parse(fs.readFileSync(path.join(__dirname, "../weights-addresses-1819.json"), "utf-8"));

// Outputs
var outputPath = path.join(__dirname, "../geocoded-fixed.json");

// Global vars
var geocodes = [];
var gcArray = [];
var newData = [];

geocode();

function geocode() {
  const geocodeAddress = (address) => new Promise((resolve, reject) => geocoder
    .geocode({ address }, (results, status) => status === 'OK'
     ? resolve({
       lat: results[0].latitude,
       lon: results[0].longitude,
     }) : reject(new Error('Cannot find address'))
    ));
  // async function getGeocoded(a) {
  //   try {
  //     const result = await geocodeAddress(a);
  //     // const newResult = await doSomethingElse(result);
  //     // const finalResult = await doThirdThing(newResult);
  //     // console.log(`Got the final result: ${result}`);
  //     // input[g].location = "new google.maps.LatLng(" + result.lat + ", "+ result.lon + ")";
  //     // gcArray.push(input[g]);
  //   } catch(error) {
  //     failureCallback(error);
  //   }
  // }
  for (var g = 0; g <= input.length-1; g++) {
    let address = geocodeAddress(input[g].address);
    // // Geocode the address
    // const geocodeAddress = (address) => new Promise((resolve, reject) => geocoder
    //   .geocode({ address }, (results, status) => status === 'OK'
    //    ? resolve({
    //      lat: results[0].latitude,
    //      lon: results[0].longitude,
    //    }) : reject(new Error('Cannot find address'))
    //   ));
    //
    // geocodeAddress()
    //   .then(function(freshGeoCodes) {
    //     console.log(freshGeoCodes.lat);
    //   })
    //   .catch(epicFail);

    var freshGeoCodes = geocodeAddress(address)
      .then(console.log(freshGeoCodes.lat))
      .catch("Nothing.");
    input[g].location = "new google.maps.LatLng(" + freshGeoCodes.lat + ", "+ freshGeoCodes.lon + ")";
    console.log(input[g].location);
    gcArray.push(input[g]);
  }
}
outputFile(gcArray);

// Output
function outputFile(o) {
  var output = JSON.stringify(o, null, 0);
  fs.writeFile(outputPath, output, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("\nSup!" + outputPath + "\nThe file was saved.\n");
  });
}
