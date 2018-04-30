'use strict';
// Application dependencies
require('dotenv').config();
const express = require('express');
const request = require('request');
const cors = require('cors');
const PORT = process.env.PORT;

let term = 'puppies';

// Application Setup
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const options = {

  url: process.env.API_URL + '?q=' + term,

  headers: {
    'Ocp-Apim-Subscription-key': process.env.API_KEYONE
  }
};

app.post('/submit',(req,res) => {
  console.log('/submit');
  request(options, function(error,response,body){
    let searchResponse = JSON.parse(body);
    // for(let i = 0; i < searchResponse.value.length; ++i){
    //   let image = searchResponse.value[i];
    //   //   // console.log('name', webPage.name);
    //   //   // console.log('url', webPage.url);
    //   //   // console.log('displayUrl', webPage.displayUrl);
    //   //   // console.log('snippet: ' + webPage.snippet);
    //   //   // console.log('dateLastCrawled: ' + webPage.dateLastCrawled);
    //   //   console.log();
    // }
    res.send(searchResponse);
  });
});


//add API and JSON line of code from lecture here

// app.get('*', (req, res) => res.redirect(CLIENT_URL));
//app.get('*', (req, res) => res.sendFile({root: '/index.html'}));
// app.get('/', (req,res) =>{
//   // res.sendFile('index.html', {root: './public'});
// })
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
//test