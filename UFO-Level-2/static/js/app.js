// Start Fresh
// tbody.html("");

// from data.js
var startData = data;

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

// Select the button
var button = d3.select("#filter-btn");

// Select the form
// var form = d3.select("#datetime");
var form = d3.select("form");
//var form2 = d3.select('#city')

// Create event handlers for clicking the button or pressing the enter key
//button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {
    // Clear earlier rows of data
    // tbody.html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputElement2 = d3.select("#city");
    // var inputElement3 = d3.select("#state");
    // var inputElement4 = d3.select("#country");
    // var inputElement5 = d3.select("shape");
    // var inputElement6 = d3.select("#duration");
    console.log(inputElement);
    console.log(inputElement2);

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputValue2 = inputElement2.property("value");
    // var inputValue3 = inputElement3.property("value");
    // var inputValue4 = inputElement4.property("value");
    // var inputValue5 = inputElement5.property("value");
    // var inputValue6 = inputElement6.property("value");
    console.log(inputValue);
    console.log(inputValue2);

    // if inputvalue is nan then pass, otherwise
    if (inputValue) {
      tbody.html("");
      var filteredData = startData.filter(item => {
        if (item.datetime === inputValue || inputValue2 && item.city == inputValue2)
          return true 
          else return false
      });
      console.log(filteredData);
      filteredData.forEach((userinput) => {
        var row = tbody.append("tr");
        Object.entries(userinput).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    }

    if (inputValue2) {
      tbody.html("");
      var filteredData = startData.filter(item => item.city === inputValue2);
      console.log(filteredData);
      filteredData.forEach((userinput) => {
        var row = tbody.append("tr");
        Object.entries(userinput).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    }
    
    // if (inputValue3) {
    //   // tbody.html("");
    //   var filteredData = startData.filter(item => item.state === inputValue3);
    //   console.log(filteredData);
    //   filteredData.forEach((userinput) => {
    //     var row = tbody.append("tr");
    //     Object.entries(userinput).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });
    // }      
    
    // if (inputValue4) {
    //   // tbody.html("");
    //   var filteredData = startData.filter(item => item.country === inputValue4);
    //   console.log(filteredData);
    //   filteredData.forEach((userinput) => {
    //     var row = tbody.append("tr");
    //     Object.entries(userinput).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });
    // }
    
    // if (inputValue5) {
    //   // tbody.html("");
    //   var filteredData = startData.filter(item => item.shape === inputValue5);
    //   console.log(filteredData);
    //   filteredData.forEach((userinput) => {
    //     var row = tbody.append("tr");
    //     Object.entries(userinput).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });
    // }


  }
  
