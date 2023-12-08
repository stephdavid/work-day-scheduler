$(document).ready(function () {

    dayjs.extend(window.dayjs_plugin_advancedFormat)
    let today = dayjs().format("dddd, MMMM Do");//Thursday, September 5th
    $("#currentDay").text(today);

    let now = dayjs().hour();

    let hour9 = $("#hour9");
    let hour10 = $("#hour10");
    let hour11 = $("#hour11");
    let hour12 = $("#hour12");
    let hour1 = $("#hour1");
    let hour2 = $("#hour2");
    let hour3 = $("#hour3");
    let hour4 = $("#hour4");
    let hour5 = $("#hour5");


    if (parseInt(hour9.attr('data-hour')) < now) {
        $(hour9).removeClass("future").addClass("past");
    } else if (parseInt(hour9.attr('data-hour')) == now) {
        $(hour9).removeClass("future").addClass("present");
    }

    if (parseInt(hour10.attr('data-hour')) < now) {
        $(hour10).removeClass("future").addClass("past");
    } else if (parseInt(hour10.attr('data-hour')) == now) {
        $(hour10).removeClass("future").addClass("present");
    }

    if (parseInt(hour11.attr('data-hour')) < now) {
        $(hour11).removeClass("future").addClass("past");
    } else if (parseInt(hour11.attr('data-hour')) == now) {
        $(hour11).removeClass("future").addClass("present");
    }

    if (parseInt(hour12.attr('data-hour')) < now) {
        $(hour12).removeClass("future").addClass("past");
    } else if (parseInt(hour12.attr('data-hour')) == now) {
        $(hour12).removeClass("future").addClass("present");
    }

    if (parseInt(hour1.attr('data-hour')) < now) {
        $(hour1).removeClass("future").addClass("past");
    } else if (parseInt(hour1.attr('data-hour')) == now) {
        $(hour1).removeClass("future").addClass("present");
    }

    if (parseInt(hour2.attr('data-hour')) < now) {
        $(hour2).removeClass("future").addClass("past");
    } else if (parseInt(hour2.attr('data-hour')) == now) {
        $(hour2).removeClass("future").addClass("present");
    }

    if (parseInt(hour3.attr('data-hour')) < now) {
        $(hour3).removeClass("future").addClass("past");
    } else if (parseInt(hour3.attr('data-hour')) == now) {
        $(hour3).removeClass("future").addClass("present");
    }

    if (parseInt(hour4.attr('data-hour')) < now) {
        $(hour4).removeClass("future").addClass("past");
    } else if (parseInt(hour4.attr('data-hour')) == now) {
        $(hour4).removeClass("future").addClass("present");
    }

    if (parseInt(hour5.attr('data-hour')) < now) {
        $(hour5).removeClass("future").addClass("past");
    } else if (parseInt(hour5.attr('data-hour')) == now) {
        $(hour5).removeClass("future").addClass("present");
    }

    // if there is a value in local storage get it and display it
    if (localStorage.getItem("hour9")) {
        store9 = localStorage.getItem("hour9");
        (hour9).val(store9);
    }
    $("button").on("click", function () {
        if (hour9.val() !== "") {
            localStorage.setItem('hour9', hour9.val());
        }
    });

    if (localStorage.getItem("hour10")) {
        store10 = localStorage.getItem("hour10");
        (hour10).val(store10);
    }
    $("button").on("click", function () {
        if (hour10.val() !== "") {
            localStorage.setItem('hour10', hour10.val());
        }
    });

    if (localStorage.getItem("hour11")) {
        store11 = localStorage.getItem("hour11");
        (hour11).val(store11);
    }
    $("button").on("click", function () {
        if (hour11.val() !== "") {
            localStorage.setItem('hour11', hour11.val());
        }
    });

    if (localStorage.getItem("hour12")) {
        store12 = localStorage.getItem("hour12");
        (hour12).val(store12);
    }
    $("button").on("click", function () {
        if (hour12.val() !== "") {
            localStorage.setItem('hour12', hour12.val());
        }
    });

    if (localStorage.getItem("hour1")) {
        store1 = localStorage.getItem("hour1");
        (hour1).val(store1);
    }
    $("button").on("click", function () {
        if (hour1.val() !== "") {
            localStorage.setItem('hour1', hour1.val());
        }
    });

    if (localStorage.getItem("hour2")) {
        store2 = localStorage.getItem("hour2");
        (hour2).val(store2);
    }
    $("button").on("click", function () {
        if (hour2.val() !== "") {
            localStorage.setItem('hour2', hour2.val());
        }
    });

    if (localStorage.getItem("hour3")) {
        store3 = localStorage.getItem("hour3");
        (hour3).val(store3);
    }
    $("button").on("click", function () {
        if (hour3.val() !== "") {
            localStorage.setItem('hour3', hour3.val());
        }
    });

    if (localStorage.getItem("hour4")) {
        store4 = localStorage.getItem("hour4");
        (hour4).val(store4);
    }
    $("button").on("click", function () {
        if (hour4.val() !== "") {
            localStorage.setItem('hour4', hour4.val());
        }
    });

    if (localStorage.getItem("hour5")) {
        store5 = localStorage.getItem("hour5");
        (hour5).val(store5);
    }
    $("button").on("click", function () {
        if (hour5.val() !== "") {
            localStorage.setItem('hour5', hour5.val());
        }
    });



















});



