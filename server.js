'use strict';
require('dotenv').config();
// Application dependencies
const express = require('express');
const request = require('request');


// Application Setup
const app = express();
const API_KEYONE = process.env.API_KEYONE;
const API_KEYTWO = process.env.API_KEYTWO;
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));
app.use(express.json());

app.use(express.urlencoded({extended:true}));





