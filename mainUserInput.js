
//readline
//const readline = require(`readline - sync`);
import {prompt} from "readline-sync";
//Alternative: import * as readline from "readline-sync"

// postcode variable to generate lat and long

//generate user input
console.log("Please provide a postcode:");
const userInput = prompt();
const lowerCasePostCode = userInput.toLowerCase();
const postCode = lowerCasePostCode.replace(" ","");
//var postCode = "nw51tl"
let url = `http://api.postcodes.io/postcodes/${postCode}`;
let postCodeAPIresponse = await fetch(url);
let postCodeData = await postCodeAPIresponse.json()

let lat = postCodeData.result.latitude;
let long = postCodeData.result.longitude;
let url2 = `https://api.tfl.gov.uk/StopPoint/?lat=${lat}&lon=${long}&stopTypes=NaptanPublicBusCoachTram`;
let busAPIresponse = await fetch(url2);
let busStopData = await busAPIresponse.json();
// print the nearest two bus stops
console.log(`The nearest two bus stops to your location are ${busStopData.stopPoints[0].commonName} : ${busStopData.stopPoints[0].indicator} and ${busStopData.stopPoints[1].commonName} : ${busStopData.stopPoints[1].indicator}`);
