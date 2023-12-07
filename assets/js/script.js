$(document).ready(function () {

    let todaysDate = new Date();
    // format the date into the "dd-MMM-yyy" format
    let formattedDate = todaysDate.toString("dd-MMM-yyyy");

    // get the parent element 
    let currentDay = $("#currentDay");

    // append the date to the parent element "p" - will text work?
    currentDay.append(formattedDate);


});

