var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

var saveBtn = $(".btn");

saveBtn.on("click", function() {
    console.log("Save clicked");
    var event = $(".form-control");
    localStorage.setItem("event", event);
});



