


//let today = Date.today(); // datejs fpr today's date
//console.log(today);

let today = dayjs().format()

console.log(today);

//var rootElement = $("#root");

let currentDay = $("#currentDay");

currentDay.append(today);