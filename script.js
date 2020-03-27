/*  Anna Sullivan
    script.js
    INFO2134WW
    Thoendel
    3/27/2020
*/
//Event listener to wait for page to load before JavaScript runs
window.addEventListener('load', function(){
//function called setTime update timeHolder with return value currentTimeAsString.
function setTime() {
    let t = getCurrentTime(); //set variable t to return value of getCurrentTime
    document.getElementById('timeHolder').innerHTML = t; //update timeHolder element using innerHTML with return value of getCurrentTime
    
}

setInterval(setTime, 1000); //setInterval to call invoke setTime once a second

document.getElementById('currentURL').innerHTML = document.location.href; //update currentURL element using innerHTML to display URL of document

let proto = window.location.protocol; //set variable proto to the protocol of the window
if(proto == 'https:'){
    document.getElementById('protocolSecure').innerHTML = 'Yes'; //update protocolSecure with Yes if proto is https
}else if(proto == 'http:'){
    document.getElementById('protocolSecure').innerHTML = 'No'; //update protocolSecure with No if proto is http
}
var newDate = new Date(); //set a new date
const fteenDay = newDate.getTime() + 1000 * 60 * 60 * 24 * 14; //add 14 days to current date
newDate.setTime(fteenDay);
document.cookie=`author=Anna Sullivan; expires=${newDate.toUTCString()}`; //persistenet cookie with author name value and expire in 14 days
});
//Add your code above this comment
//do not modify anything beneath this 
//comment
function getCurrentTime() {
    const currentDateTime = new Date();
    const currentMinute = (currentDateTime.getHours() < 10 ? '0' : '') + currentDateTime.getHours();
    const currentHour = (currentDateTime.getMinutes() < 10 ? '0' : '') + currentDateTime.getMinutes();
    const currentSecond = (currentDateTime.getSeconds() < 10? '0' : '') + currentDateTime.getSeconds();
    const currentTimeAsString = currentMinute + ":" + currentHour + ":" + currentSecond;
    return currentTimeAsString;
}
