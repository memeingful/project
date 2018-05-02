'use strict';
// Application dependencies
require('dotenv').config();
const express = require('express');
const request = require('request');
const cors = require('cors');
const PORT = process.env.PORT;

// Application Setup
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/submit/:term',(req,res) => {
  let options = {
    url: process.env.API_URL + '?q=' + req.params.term,
    headers: {
      'Ocp-Apim-Subscription-key': process.env.API_KEYONE
    }
  };

  request(options, function(error,response,body){
    let searchResponse = JSON.parse(body);
    res.send(searchResponse);
  });
});



// request('http://quotes.rest/quote/random.json?api_key=API_KEYTWO', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body.url);
//   console.log(body.explanation);
// });

// app.get('/submit/',(req,res) => {
//   console.log('request quote', req)
//   console.log('response quote',res)
//   let quoteResponse = {
//     url: process.env.API_URLTWO + '?q=' + req.params.quote,
//     headers: {
//       'X-TheySaidSo-Api-Secret': process.env.API_KEYTWO
//     }
//   };

//   request(quoteResponse, function(error,response,body){
//     let quoteSearchResponse = JSON.parse(body);
//     res.send(quoteSearchResponse);
//   });
// });
app.get('/quote', (req,res) => {
  let quoteResponse = {
    url: process.env.API_URLTWO,
    headers: {
      'X-TheySaidSo-Api-Secret': process.env.API_KEYTWO
    }
  };
  request(quoteResponse, function(error,response,body){
    let quoteSearchResponse = JSON.parse(body);
    res.send(quoteSearchResponse);
  });
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));