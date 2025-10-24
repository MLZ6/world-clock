//Sydney
function updateTime() {

let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");

 
  
//Gaborone


let gaboroneElement = document.querySelector("#gaborone");
let gaboroneDateElement = gaboroneElement.querySelector(".date");
let gaboroneTimeElement = gaboroneElement.querySelector(".time");
let gaboroneTime = moment().tz("Africa/Gaborone");

gaboroneDateElement.innerHTML = gaboroneTime.format("MMMM Do YYYY");
gaboroneTimeElement.innerHTML = gaboroneTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
