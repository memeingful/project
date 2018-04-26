'use strict';
require('dotenv').config();
// Application dependencies
const express = require('express');
const request = require('request');

// Application Setup
const app = express();
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

app.use(express.urlencoded({extended:true}));
//add API and JSON line of code from lecture here

