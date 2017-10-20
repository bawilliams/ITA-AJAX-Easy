// Wait for the entire document to load before running AJAX
$(document).ready(function() {

    // Get a JSON object back from the open-notify API
    $.getJSON('http://api.open-notify.org/astros.json', function(data) {

        // Create a list of all people in space by looping through the JSON object
        var astronautHTML = '<ul>';

        $.each(data['people'], function(index, person) {
            astronautHTML += `<li>${person.name} is on the spacecraft: ${person.craft}.</li>`;
        });

        astronautHTML += '</ul>';

        // Add the HTML to the page
        $('.ajax').html(astronautHTML);
    });
});