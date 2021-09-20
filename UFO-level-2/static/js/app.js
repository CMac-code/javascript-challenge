// from data.js
var tableData = data;
console.log(tableData);

var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });



var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");

    var inputElement = d3.select("#datetime"); 
    var inputValue = inputElement.property("value");
    var cityInput=d3.select("#city").property("value");
    var stateInput=d3.select("#state").property("value");
    var countryInput=d3.select("#country").property("value");
    var shapeInput=d3.select("#shape").property("value");
    console.log(cityInput);

    var filterData=tableData;
    if (inputValue){
        filterData = filterData.filter(row => row.datetime === inputValue); 
    }
    if (cityInput){
        filterData = filterData.filter(row => row.city === cityInput);       
    }
    if (stateInput){
        filterData = filterData.filter(row => row.state === stateInput);       
    }
    if (countryInput){
        filterData = filterData.filter(row => row.country === countryInput);       
    }
    if (shapeInput){
        filterData = filterData.filter(row => row.shape === shapeInput);       
    }
    

    filterData.forEach(function(dateData){
      var row=tbody.append("tr");
      Object.entries(dateData).forEach(function([key,value]){
      var cell=tbody.append("td");
      cell.text(value);
          });
      });
  });
