$(document).ready(function() {
// write your code here
    // Setting var to later on hold my JSON data
    var myJson = undefined;
    // Getting my data from data.json file
    $.getJSON("data.json", function(data) {
        myJson = data; // Store Json data in variable 
        // For Loop to place names in a Table Row
        for(let i = 0; i < myJson.length; i++) {
            var names = myJson[i].name; // Grabs names out of Json
            var description = myJson[i].description; // Grabs the description out of Json
            var location = myJson[i].location; // Grabs the latitude and longitude out of Json
            
            // Creates new row in the HTML table
            var table = document.getElementById('table');
            var row = table.insertRow(i+1);

            // Creates 3 new cells in the HTML table
            var namesCell = row.insertCell(0);
            var descripCell = row.insertCell(-1); // The -1 index adds a cell after the last cell, so this makes sure this is the last created cell
            var locationCell = row.insertCell(-1);

            // Puts all the names in the correct cell
            namesCell.innerHTML = names; 

            // Puts all the descriptions in the correct cell
            descripCell.innerHTML = description;

            // Creates a google maps link with the latitudes and longitudes given in Json data
            var linkText = "Open in Google Maps" 
            var link = linkText.link('https://www.google.com/maps?q=' + location)
            
            // Puts the link in the correct cell
            locationCell.innerHTML = link;
        };
    });
});

