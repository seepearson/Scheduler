

function setCurrentDay(){
    var currentDay = moment().format('dddd ');
    var currentTime= moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay").text(currentDay + currentTime);
    console.log(currentTime);
}
setCurrentDay();

var eventData = document.querySelector("tableData");

function renderEvent(){
    eventData.innerHTML = "";
for (var i=0; i < eventData.clientHeight; i++) {
    var event =events[i];
    var td= document.getElementById("td");
    td.textContent= event;

}
}

function init(){
    var storedEvents = JSON.parse(localStorage.getItem("events"));
if (storedEvents !== null){
    events= storedEvents;
}
renderEvent();
}

function storeItem (){
    localStorage.setItem(events, JSON.stringify(events));
}

tableData.addEventListener("submit", function(eventPD){
    eventPD.proventDefault();
var eventText= td.value.trim();
if(td === ""){
    return;
}

events.push(td);
eventText.value ="";

storeEvents();
renderEvents();
});