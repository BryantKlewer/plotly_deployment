//Line chart 
//Plotly.newPlot("plotArea", [{x: [10, 20, 30, 40], y: [8, 16, 39, 69]}]);
//----------------------------------------------------------------
// bar chart
//var trace = {
//    x: ["burrito", "pizza", "chicken"],
//    y: [10, 18, 5],
//    type: "bar"
 //};
 //Plotly.newPlot("plotArea", [trace]);
//----------------------------------------------------------------
 // bar chart with "trace" variable enclosed in an array
 //var trace = [{
 //   x: ["burrito", "pizza", "chicken"],
 //   y: [10, 18, 5],
 //   type: "bar"
//}];
//Plotly.newPlot("plotArea", trace);
//----------------------------------------------------------------
// bar chart with layout options
//var trace = {
//    x: ["burrito", "pizza", "chicken"],
//    y: [10, 18, 5],
//    type: "bar"
//};
//var layout = {
//    title: "Luncheon Survey",
//    xaxis: {title: "Food Option"},
//    yaxis: {title: "Number of Respondents"}
//};
//Plotly.newPlot("plotArea", [trace], layout);
//----------------------------------------------------------------
// practice bar chart   
//var trace = {
//    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//    type: "bar"
//};
//var layout = {
//    title: "Percent of nonalcoholic drinks ordered",
//    xaxis: {title: "Nonalcoholic Drinks"},
//    yaxis: {title: "Percent Served"}
//};
//Plotly.newPlot("plotArea", [trace], layout);
//----------------------------------------------------------------
// pie chart
//var trace = {
//    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//    type: 'pie'
//  };
//  var data = [trace];
//  var layout = {
//    title: "'Pie' Chart",
// };
//  Plotly.newPlot("plotArea", data, layout);
//----------------------------------------------------------------
// scatter plot
//var trace = {
//   x: [1, 2, 3, 4],
//   y: [10, 15, 13, 25],
//   mode: 'lines+markers', // can use markers, lines, or lines+markers
//    type: 'scatter'
//};
//var layout = {
//    title: "Practice Scatter Chart",
//    xaxis: {title: "the x axis"},
//    yaxis: {title: "the y axis"}
//};
//Plotly.newPlot("plotArea", [trace], layout);
//----------------------------------------------------------------
// multi scatter plot
var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };
  
  var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
  };
  
  var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
  };
  
  var data = [trace1, trace2, trace3];

  var layout = {
    title: "Practice Scatter Chart",
    xaxis: {title: "the x axis"},
    yaxis: {title: "the y axis"}
  };

  Plotly.newPlot("plotArea", data, layout);
