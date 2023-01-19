// Functions to be used in BusStops
import { prompt } from "readline-sync";

// 1. Ask for input and convert postcode

export function postCodeInput() {
    console.log("Please provide a postcode:");
    const userInput = prompt();
    const lowerCasePostCode = userInput.toLowerCase();
    const postCode = lowerCasePostCode.replace(" ", ""); 
    return postCode;
}

// 2. Fetch postcode data from API 
export async function postCodeData(postCode){
let url = `http://api.postcodes.io/postcodes/${postCode}`;
let postCodeAPIresponse = await fetch(url);
let postCodeData = await postCodeAPIresponse.json()
return postCodeData;
}

//2.1 Generate Latitude
export function latPC(postCodeData){
    let lat = postCodeData.result.latitude;
    return lat;
}
//2.2 Generate Longitude
export function longPC(postCodeData){
    let long = postCodeData.result.longitude;
    return long;
}

// 3.  Fetch StopPoint data (commonName and indicator)

// 4. Generate busstop ID and fetch bus arrival data () and cut it to size and loop through all the incoming busses

