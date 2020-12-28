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
    var inputElement3 = d3.select("#state");
    var inputElement4 = d3.select("#country");
    var inputElement5 = d3.select("#shape");
    console.log(inputElement);
    console.log(inputElement2);
    console.log(inputElement3);
    console.log(inputElement4);
    console.log(inputElement5);

    // Get the value property of the input element
    var idate = inputElement.property("value");
    var icity = inputElement2.property("value");
    var istate = inputElement3.property("value");
    var icountry = inputElement4.property("value");
    var ishape = inputElement5.property("value");
    console.log(idate);
    console.log(icity);
    console.log(istate);
    console.log(icountry);
    console.log(ishape);


  // Mon 12-28 nested filter
    if (icountry)
    tbody.html("");
      if (icountry && istate) {
        if (icountry && istate && icity) {
          if (icountry && istate && icity && idate) {
            if (icountry && istate && icity && idate && ishape) {
              var filteredData = startData.filter(item => item.country === icountry && item.state === istate && item.city === icity && item.datetime === idate && item.shape === ishape)
              console.log(filteredData);
              filteredData.forEach((userinput) => {
                var row = tbody.append("tr");
                Object.entries(userinput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
              });
            }
              else var filteredData = startData.filter(item => item.country === icountry && item.state === istate && item.city === icity && item.datetime === idate)
              console.log(filteredData);
              filteredData.forEach((userinput) => {
                var row = tbody.append("tr");
                Object.entries(userinput).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
               });
          }
            else var filteredData = startData.filter(item => item.country === icountry && item.state === istate && item.city === icity)
            console.log(filteredData);
            filteredData.forEach((userinput) => {
              var row = tbody.append("tr");
              Object.entries(userinput).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
               });
            });
        }
          else var filteredData = startData.filter(item => item.country === icountry && item.state === istate)
          console.log(filteredData);
          filteredData.forEach((userinput) => {
            var row = tbody.append("tr");
            Object.entries(userinput).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
          });
      }
        else var filteredData = startData.filter(item => item.country === icountry)
        console.log(filteredData);
        filteredData.forEach((userinput) => {
          var row = tbody.append("tr");
          Object.entries(userinput).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
          });
        });
      

}
    
    



    // // if inputvalue is nan then pass, otherwise
    // if (inputValue) {
    //   tbody.html("");
    //   var filteredData = startData.filter(item => {
    //     if (item.datetime === inputValue || inputValue3 && item.state === inputValue3)
    //       return true 
    //       else return false
    //   });
    //   console.log(filteredData);

    //   filteredData.forEach((userinput) => {
    //     var row = tbody.append("tr");
    //     Object.entries(userinput).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });
    // }

    // if (inputValuex2) {
    //   tbody.html("");
    //   var filteredData = startData.filter(item => item.city === inputValue2);
    //   console.log(filteredData);
    //   filteredData.forEach((userinput) => {
    //     var row = tbody.append("tr");
    //     Object.entries(userinput).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });
    // }
    
    // if (inputValuex3) {
    //   tbody.html("");
    //   //var filteredData = startData.filter(item => item.state === inputValue3);

    //   var filteredData = startData.filter(item => {
    //     if (item.state === inputValue3 && item.datetime == inputValue || item.state == inputValue3)
    //       return true 
    //       else return false
    //     });

    //   console.log(filteredData);
    //   filteredData.forEach((userinput) => {
    //     var row = tbody.append("tr");
    //     Object.entries(userinput).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   }); 
  
