let url = 'https://api.tfl.gov.uk/StopPoint/?lat=51.5539&lon=-0.1468&stopTypes=NaptanPublicBusCoachTram';
// await version
let busAPIresponse = await fetch(url);
let busStopData = await busAPIresponse.json();
//console.log(busStopData);
// print the nearest two bus stops
console.log(`The nearest two bus stops to your location are: ${busStopData.stopPoints[0].commonName} : ${busStopData.stopPoints[0].indicator} and ${busStopData.stopPoints[1].commonName} : ${busStopData.stopPoints[1].indicator}`);

// commonname and indicator