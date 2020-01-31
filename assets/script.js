var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

var saveBtn = $(".btn");

//Set saved events
//9am
var nineEvent = localStorage.getItem("9am");
var firstEvent = document.getElementById("9event");
firstEvent.value = nineEvent;
//10a
var tenEvent = localStorage.getItem("10am");
var secondEvent = document.getElementById("10event");
secondEvent.value = tenEvent;
//11a
var elevenEvent = localStorage.getItem("11am");
var thirdEvent = document.getElementById("11event");
thirdEvent.value = elevenEvent;
//12p
var twelveEvent = localStorage.getItem("12pm");
var fourthEvent = document.getElementById("12event");
fourthEvent.value = twelveEvent;
//1p
var oneEvent = localStorage.getItem("1pm");
var fifthEvent = document.getElementById("13event");
fifthEvent.value = oneEvent;
//2p
var twoEvent = localStorage.getItem("2pm");
var sixthEvent = document.getElementById("14event");
sixthEvent.value = twoEvent;
//3p
var threeEvent = localStorage.getItem("3pm");
var seventhEvent = document.getElementById("15event");
seventhEvent.value = threeEvent;
//4p
var fourEvent = localStorage.getItem("4pm");
var eighthEvent = document.getElementById("16event");
eighthEvent.value = fourEvent;
//5p
var fiveEvent = localStorage.getItem("5pm");
var ninthEvent = document.getElementById("17event");
ninthEvent.value = fiveEvent;

saveBtn.on("click", function(e) {
    e.preventDefault();
    //9a
    var nine = $("#9event").val();
    localStorage.setItem("9am", nine);
    //10a
    var ten = $("#10event").val();
    localStorage.setItem("10am", ten);
    //11a
    var eleven = $("#11event").val();
    localStorage.setItem("11am", eleven);
    //12p
    var twelve = $("#12event").val();
    localStorage.setItem("12pm", twelve);
    //1p
    var one = $("#13event").val();
    localStorage.setItem("1pm", one);
    //2p
    var two = $("#14event").val();
    localStorage.setItem("2pm", two);
    //3p
    var three = $("#15event").val();
    localStorage.setItem("3pm", three);
    //4p
    var four = $("#16event").val();
    localStorage.setItem("4pm", four);
    //5p
    var five = $("#17event").val();
    localStorage.setItem("5pm", five);
});

// const m = moment();

// var iscurrentDate = startTime.isSame(new Date(), "hour");
// if(iscurrentDate) {
//     console.log("present");
// }

   
// var hour = moment().format("h");
// console.log(hour);
// var start = moment().hour(9);
// var diff = start.diff(hour);
// console.log(diff);

// if(diff < 0) {
//     console.log("past");
// } else if(diff > 0) {
//     console.log("future");
// } else {
//     console.log("current");
// }





// console.log(moment().format("h"));
// console.log(moment().startOf('day').fromNow());
// console.log(moment().endOf('day').fromNow());