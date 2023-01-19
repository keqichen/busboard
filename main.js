// BUSSTOPS

//import any relevant functions
import { postCodeInput } from "./mainFunctions.js"
import { postCodeData } from "./mainFunctions.js"
import { latPC } from "./mainFunctions.js"
import { longPC } from "./mainFunctions.js"


// Function 1: Ask user for postcode and convert into usable format for API
let postcode = postCodeInput();

// Function 2: Fetch postcode data from API and generate Latitude and Longitude from postcode
let pcData = postCodeData(postcode);
let lat = latPC(pcData);
let long = longPC(pcData);
console.log(pcData);
// Function 3: Fetch StopPoint data (commonName and indicator)


// Print two nearest busstops to postcode


// Print next busses to arrive for stop 1


// Function 4: Generate busstop ID and fetch bus arrival data () and cut it to size and loop through all the incoming busses


// Print next busses to arrive for stop 2


// Function 4
