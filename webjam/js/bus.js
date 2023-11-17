var curTime = new Date();
var curHour = curTime.getHours();
var curMins = curTime.getMinutes();
var curDay = curTime.getDay();
var AM = "AM";
if(curHour > 12) AM = "PM";
if(curMins < 10) curMins = "0" + curMins;

document.getElementById("curtime").innerHTML = `The time is ${curHour%12}:${curMins} ${AM} and the ARC is currently`;

if(curDay == 6 && (curHour < 8 || curHour > 21)) {
    document.getElementById("answer").innerHTML = "CLOSED";
} else if(curDay == 0 && (curHour < 8 )) {
    document.getElementById("answer").innerHTML = "CLOSED";
} else if(curHour < 6) {
    document.getElementById("answer").innerHTML = "CLOSED";
} else if(curHour < 8 || curHour > 20) {
    document.getElementById("answer").innerHTML = "NOT BUSY";
} else if (curHour < 2 || curHour > 4) {
    document.getElementById("answer").innerHTML = "BUSY";
} else {
    document.getElementById("answer").innerHTML = "SOMEWHAT BUSY";
}

