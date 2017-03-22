"use strict";

const request = require('request');
const http = require('http');

const myRequest = (url, callback) => {

  return http.get(url, function(response) {
    var body = '';
    response.on('data', function(chunk){
      body += chunk;
    });
    response.on('end', function(){
      callback(null, response, body);
    })
    }).on('error', function(e){
      console.log('hey')
  })
}


const testRequest = (module) => {
  module('http://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  });
};

// // request module test
//testRequest(request);
//
// // myRequest module test
testRequest(myRequest);
