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
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
//button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputElement2 = d3.select("#city");
    var inputElement3 = d3.select("#state");
    var inputElement4 = d3.select("#country");
    var inputElement5 = d3.select("#shape");
    
    // Show the inputElement in the console log for bug detection
    console.log(inputElement);
    console.log(inputElement2);
    console.log(inputElement3);
    console.log(inputElement4);
    console.log(inputElement5);

    // Get the value property of the input element
    var icountry = inputElement4.property("value");
    var istate = inputElement3.property("value");
    var icity = inputElement2.property("value");
    var idate = inputElement.property("value");
    var ishape = inputElement5.property("value");
    
    // Show the value in the console log for bug detection
    console.log(icountry);
    console.log(istate);
    console.log(icity);
    console.log(idate);    
    console.log(ishape);

    const filters = {};
    filters.country = inputElement4.property("value");
    filters.state = inputElement3.property("value");
    filters.city = inputElement2.property("value");
    filters.datetime = inputElement.property("value");
    filters.shape = inputElement5.property("value");
    
    // Show the values in the filters
    console.log('filter ...', filters.country);
    console.log('filter ...', filters.state);
    console.log('filter ... ', filters.city);
    console.log('filter ...', filters.datetime);    
    console.log('filter ...',  filters.shape);

// Wed 12-30 attempt at less cumbersome approach
    Object.keys(filters).forEach(filter => {
        filteredData = startData.filter(inputItem => {
          if (filters[filter] === '') return true;
          return (filter => filter.city === filters.city);
        });
    })

    console.log('Post object.key approach filtered data')
    console.log(filteredData);
    tbody.html("");
    
    filteredData.forEach((inputItem) => {
      var row = tbody.append("tr");
      Object.entries(inputItem).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}