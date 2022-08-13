//let words = ['these', 'words', 'need', 'capitalized']
//let caps = words.map(word => word.toUpperCase())
//console.log(caps)
//-------------------------------------------------
//let numbers = [1, 2, 3, 4, 5]
//let sqared = numbers.map(number => number*number)
//console.log(sqared)
//------------------------------------------------
//var numbers = [1, 2, 3, 4, 5];
//var doubled = numbers.map(function(num){
//    return num * 2;
//});
//console.log(doubled);
//------------------------------------------------
//var numbers = [0, 2, 4, 6, 8];
//var added = numbers.map(function(num){
//    return num + 5;
//    });
//console.log(added);
//------------------------------------------------
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var populations = cities.map(function(pops){
    return pops.population;
});
console.log(populations);