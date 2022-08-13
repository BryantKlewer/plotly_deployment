const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then(receivedData => console.log(receivedData));
d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

d3.json(url).then(function(receivedData) {
    lat = receivedData.map(row => row.location[('latitude')]);
    lon = receivedData.map(row => row.location[('longitude')]);
    coords = [lat, lon]
    console.log(coords);
    });