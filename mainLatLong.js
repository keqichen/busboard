
// two variables, lat and long to be inserted in url
let lat = 51.5539;
let long = -0.1468;
let url = `https://api.tfl.gov.uk/StopPoint/?lat=${lat}&lon=${long}&stopTypes=NaptanPublicBusCoachTram`;
// await version
let busAPIresponse = await fetch(url);
let busStopData = await busAPIresponse.json();
//console.log(busStopData);
//console.log(busStopData);
// print the nearest two bus stops
console.log(`The nearest two bus stops to your location are: ${busStopData.stopPoints[0].commonName} : ${busStopData.stopPoints[0].indicator} and ${busStopData.stopPoints[1].commonName} : ${busStopData.stopPoints[1].indicator}`);

let id = busStopData.stopPoints[0].id;
console.log(id);
let url2 = `https://api.tfl.gov.uk/StopPoint/${id}/Arrivals`;
let busArrivalResponse = await fetch(url2);
let busArrivalDataFull = await busArrivalResponse.json();
// splice array to a maximum of 5
let busArrivalData = busArrivalDataFull.slice(0, 5);
//console.log(busArrivalData);
console.log(`The next busses to arrive at ${busStopData.stopPoints[0].commonName} are:`);
for (let i = 0; i < busArrivalData.length; i++) {
    let date = new Date(busArrivalData[i].expectedArrival);
    let hour = date.getHours();
    let min = 0;
    if (date.getMinutes() < 10) {
        min = '0' + date.getMinutes();
    }
    else {
        min = date.getMinutes();
    }
    console.log(`${hour}:${min} ${busArrivalData[i].lineName} to ${busArrivalData[i].destinationName} \n`);
}




