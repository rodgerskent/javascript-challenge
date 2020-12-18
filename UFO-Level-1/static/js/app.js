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

// // Insert the starting (unfiltered) data into a table
// data.forEach((filteredData) => {
//   var row = tbody.append("tr");
//   Object.entries(filteredData).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

    // // Prevent the page from refreshing
    d3.event.preventDefault();

    // Then, select the unordered list element by class name
    // var list = d3.select("tr");

    // remove any children from the list to
    //  list.html("");
     
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    console.log(inputElement);

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    
    // Filter the data based on user input
    var filteredData = startData.filter(item => item.datetime === inputValue);
    console.log(filteredData);

    // var startData = filteredData

    // data.forEach((startData !== filteredData) => {
    //   var row = tbody.remove("tr");
    //   Object.entries(startData !== filteredData).forEach(([key, value]) => {
    //     var cell = row.remove("td");
    //     cell.text(value);
    //   });
    // });

    // data.forEach((filteredData) => {
    //     var row = tbody.append("tr");
    //     Object.entries(filteredData).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });
    
      // data.forEach((filteredData) => {
      //   var row = tbody.replaceWith("tr");
      //   Object.entries(filteredData).forEach(([key, value]) => {
      //     var cell = row.replaceWith("td");
      //     cell.text(value);
      //   });
      // });

    // data.forEach((filteredData) => {
    //       var row = tbody.replace("tr");
    //       Object.entries(filteredData).forEach(([key, value]) => {
    //         var cell = row.replace("td");
    //         cell.text(value);
    //       });
    //     });
  }

    data.forEach((filteredData) => {
      var row = tbody.filter("tr");
      Object.entries(filteredData).forEach(([key, value]) => {
        var cell = row.filter("td");
        cell.text(value);
      });
  });

  