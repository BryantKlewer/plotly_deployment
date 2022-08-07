//let numbers = [13,22,36,54,55]
//let evenNumbers = numbers.filter(number => number % 2 == 0)
//console.log(evenNumbers)
//------------------------------------------------------------
//var numbers = [1,2,3,4,5];
//var larger = numbers.filter(function(num){
//    return num > 1;
//});
//console.log(larger);
//------------------------------------------------------------
//var familyAge = [2,3,39,37,9];
//var olderThanFive = familyAge.filter(function(age){
//    return age > 5;
//});
//console.log(olderThanFive);
//------------------------------------------------------------
//var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
//var startsWithS = words.filter(function(word){
//    return word != 'dog' && word != 'orangutan';
//    });
//console.log(startsWithS);
//------------------------------------------------------------
// SORTING FUNCTIONS -----------------------------------------
//------------------------------------------------------------
//var familyAge = [3,2,39,37,9];
//var sortedAge = familyAge.sort((a,b) => a - b);
//console.log(sortedAge);
//------------------------------------------------------------
// SLICING FUNCTIONS -----------------------------------------
//------------------------------------------------------------
//var integers = [0,1,2,3,4,5];
//var slice1 = integers.slice(0,2); // slice begins at index 0 and runs UP TO index 2, NOT THROUGH index 2
//console.log(slice1);
//------------------------------------------------------------
//var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
//var slice = words.slice(0,3);
//console.log(slice);
//------------------------------------------------------------ 
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice = words.slice(3, ); // leaving second argument undefined slices the end of an array
console.log(slice);
