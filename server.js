// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// add uport import const
const uportConnect = require('uport-connect');
const qrcode = require('qrcode-terminal');  


//process.env.signer  
const OSTSDK = require('@ostdotcom/ost-sdk-js'); 

const apiEndpoint = 'https://sandboxapi.ost.com/v1.1';  
const apikey = process.env.ost_key;
const ostsecret = process.env.ost_api_secret;

const ostObj = new OSTSDK({apiKey: apikey, apiSecret: ostsecret, apiEndpoint: apiEndpoint});

const transactionService = ostObj.services.transactions;
const userService = ostObj.services.users;
const actionService = ostObj.services.actions; // initializes an action object

//id A 26f04967-5fb7-47f6-a996-b62ea206483e
//id B eb50e4e9-eb7f-4d32-84f5-97e29d3ac76b
//test seeing other transactions
transactionService.list({page_no: 1, limit: 100}).then(function(res) { console.log("got it."); console.log(res.data.transactions);}).catch(function(err) { console.log(JSON.stringify(err)); });

var ost_ledger_object = ostObj.services.ledger;
transactionService.list({page_no: 1, limit: 10}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });

/*
function waiter(){
  var x = 10;
  x + 10;
}

var i;
for (i = 0; i < 100; i++) {
    if(i%50 == 0){
      console.log("sent " + i + "transactions"); 
    }
  var amount = Math.random() * 2;
  var which  = Math.random();
  var sender, getter;
  if(which >= 0.5){//verified this is randomly selecting one of below.
    sender = '9441b956-9603-4283-8aff-d88e83304046';  
    getter = 'ed1f838f-a9ed-45d9-bd2f-9cf751038101';
  }else{
    sender = 'ed1f838f-a9ed-45d9-bd2f-9cf751038101';
    getter = '9441b956-9603-4283-8aff-d88e83304046';  
  }
  
  //too many requests some times. when is there
  transactionService.execute({from_user_id:sender, to_user_id:getter, action_id:'36813', amount:0.01}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); console.log("getter: " + getter + "... send = " + sender); }); //what is wrong
 //console.log("getter: " + getter);//verfified getter is one of which selected arguments we expected. 
  
setTimeout(waiter, 1500);     
  
} */
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {

  
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

   
