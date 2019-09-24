
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#dateInput");
var $cityInput = document.querySelector("#cityInput");
var $stateInput = document.querySelector("#stateInput");
var $countryInput = document.querySelector("#countryInput");
var $shapeInput = document.querySelector("#shapeInput");
var $submitBtn = document.querySelector("#submit");

//tableData 
var tableData = data;

//renderTable 
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    //Get the current sighting 
    var sighting = tableData[i];
    var fields = Object.keys(sighting);
    //Create a new row in the tbody
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      //For every field in the sighting object, create a new cell
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

// Add an event listener to the Submit Button
$submitBtn.addEventListener("click", filterInput);
  
function filterDate(filteredSighting) {
  return filteredSighting.datetime == $dateInput.value.trim().toLowerCase();
};

function filterCity(filteredSighting) {
  return filteredSighting.city == $cityInput.value.trim().toLowerCase();
};

function filterState(filteredSighting) {
  return filteredSighting.state == $stateInput.value.trim().toLowerCase();
};

function filterCountry(filteredSighting) {
  return filteredSighting.country == $countryInput.value.trim().toLowerCase();
};

function filterShape(filteredSighting) {
  return filteredSighting.shape == $shapeInput.value.trim().toLowerCase();
};

function filterInput() {

  // Reseting data set 
  tableData = data;

  // filters
  if ($dateInput.value) {
      tableData = tableData.filter(filterDate);
  };

  if ($cityInput.value) {
      tableData = tableData.filter(filterCity);
  };

  if ($stateInput.value) {
      tableData = tableData.filter(filterState);
  };

  if ($countryInput.value) {
      tableData = tableData.filter(filterCountry);
  };

  if ($shapeInput.value) {
      tableData = tableData.filter(filterShape);
  };
  $dateInput.value = "";
  $cityInput.value = "";
  $stateInput.value = "";
  $countryInput.value = "";
  $shapeInput.value = "";

  renderTable();
};

// Render the table for the first time on page load
renderTable();