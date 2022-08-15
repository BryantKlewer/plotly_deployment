// print data to console
console.log(cityGrowths);

// sort cities in descending order of population growth
var sortedCities = cityGrowths.sort((a,b) => 
a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities);

// select top 5 cities from sortedCities
var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

// create arrays of city names and their population growth for plotting
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// create bar chart with the arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: 'bar'
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);

// sort cities by total population
var totalPopulation = cityGrowths.sort((a, b) => a.population - b.population).reverse();
console.log(totalPopulation);

// select top seven cities with highest populations
var topSevenCities = totalPopulation.slice(0, 7);
console.log(topSevenCities);

// create arrays of top seven cities to plot
var topSevenCitiesNames = topSevenCities.map(city => city.City);
var topSevenCitiesPop = topSevenCities.map(city => parseInt(city.population));

// create bar chart
var trace1 = {
    x: topSevenCitiesNames,
    y: topSevenCitiesPop,
    type: 'bar'
};
var data1 = [trace1];
var layout1 = {
    title: "Largest Cities by Population",
    xaxis: {title: "City"},
    yaxis: {title: "Population"}
    };
Plotly.newPlot("bar-plot", data1, layout1);