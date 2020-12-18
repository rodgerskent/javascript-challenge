// from data.js
var startData = data;
// var filteredData = []

// Console.log the initial data set from data.js
console.log(startData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Insert the starting (unfiltered) data into a table
data.forEach((startData) => {
    var row = tbody.append("tr");
    Object.entries(startData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
