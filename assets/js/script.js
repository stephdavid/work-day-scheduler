$(document).ready(function () {

    dayjs.extend(window.dayjs_plugin_advancedFormat)
    let today = dayjs().format("dddd, MMMM Do");//Thursday, September 5th
    $("#currentDay").text(today);


 


});

