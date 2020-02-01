var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

var saveBtn = $(".btn");
var m = moment().hour();
var hours = [ 9, 10, 11, 12, 13, 14, 15, 16, 17 ];

//Check for past, present, future
for(i = 0; i < hours.length; i++) {
    if(hours[i] === m) {
        console.log(hours[i] + " is present");
    } else if(hours[i] < m) {
        console.log(hours[i] + " is past");
    } else if(hours[i] > m) {
        console.log(hours[i] + " is future");
    }
};

//Set saved events
//9am
var nineEvent = localStorage.getItem("9am");
var firstEvent = document.getElementById("9event");
firstEvent.value = nineEvent;

if(hours[0] === m) {
    $("#9event").attr("class", "form-control present-color");
} else if(hours[0] < m) {
    $("#9event").attr("class", "form-control past-color");
} else {
    $("#9event").attr("class", "form-control future-color");
};

// if($("#9event") === m)

//10a
var tenEvent = localStorage.getItem("10am");
var secondEvent = document.getElementById("10event");
secondEvent.value = tenEvent;

if(hours[1] === m) {
    $("#10event").attr("class", "form-control present-color");
} else if(hours[1] < m) {
    $("#10event").attr("class", "form-control past-color");
} else {
    $("#10event").attr("class", "form-control future-color");
};

//11a
var elevenEvent = localStorage.getItem("11am");
var thirdEvent = document.getElementById("11event");
thirdEvent.value = elevenEvent;

if(hours[2] === m) {
    $("#11event").attr("class", "form-control present-color");
} else if(hours[2] < m) {
    $("#11event").attr("class", "form-control past-color");
} else {
    $("#11event").attr("class", "form-control future-color");
};

//12p
var twelveEvent = localStorage.getItem("12pm");
var fourthEvent = document.getElementById("12event");
fourthEvent.value = twelveEvent;

if(hours[3] === m) {
    $("#12event").attr("class", "form-control present-color");
} else if(hours[3] < m) {
    $("#12event").attr("class", "form-control past-color");
} else {
    $("#12event").attr("class", "form-control future-color");
};

//1p
var oneEvent = localStorage.getItem("1pm");
var fifthEvent = document.getElementById("13event");
fifthEvent.value = oneEvent;

if(hours[4] === m) {
    $("#13event").attr("class", "form-control present-color");
} else if(hours[4] < m) {
    $("#13event").attr("class", "form-control past-color");
} else {
    $("#13event").attr("class", "form-control future-color");
};

//2p
var twoEvent = localStorage.getItem("2pm");
var sixthEvent = document.getElementById("14event");
sixthEvent.value = twoEvent;

if(hours[5] === m) {
    $("#14event").attr("class", "form-control present-color");
} else if(hours[5] < m) {
    $("#14event").attr("class", "form-control past-color");
} else {
    $("#14event").attr("class", "form-control future-color");
};

//3p
var threeEvent = localStorage.getItem("3pm");
var seventhEvent = document.getElementById("15event");
seventhEvent.value = threeEvent;

if(hours[6] === m) {
    $("#15event").attr("class", "form-control present-color");
} else if(hours[6] < m) {
    $("#15event").attr("class", "form-control past-color");
} else {
    $("#15event").attr("class", "form-control future-color");
};

//4p
var fourEvent = localStorage.getItem("4pm");
var eighthEvent = document.getElementById("16event");
eighthEvent.value = fourEvent;

if(hours[7] === m) {
    $("#16event").attr("class", "form-control present-color");
} else if(hours[7] < m) {
    $("#16event").attr("class", "form-control past-color");
} else {
    $("#16event").attr("class", "form-control future-color");
};

//5p
var fiveEvent = localStorage.getItem("5pm");
var ninthEvent = document.getElementById("17event");
ninthEvent.value = fiveEvent;

if(hours[8] === m) {
    $("#17event").attr("class", "form-control present-color");
} else if(hours[8] < m) {
    $("#17event").attr("class", "form-control past-color");
} else {
    $("#17event").attr("class", "form-control future-color");
};

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
