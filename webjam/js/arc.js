function displayText() {
    var text = document.getElementById("options");
    text.style.display = "block";
}

function createTeam() {
    let time = document.getElementById("playtime").value + " " + document.querySelector('input[name="am"]:checked').value;
    let sport = document.querySelector('input[name="sports"]:checked').value;
    let skill = document.querySelector('input[name="skill"]:checked').value;
    let name = document.getElementById('name').value;

    let table = document.getElementById("teams");
    let row = table.insertRow(-1);
    row.insertCell(0).innerHTML = time;
    row.insertCell(1).innerHTML = sport;
    row.insertCell(2).innerHTML = skill;
    row.insertCell(3).innerHTML = name;
    row.insertCell(4).innerHTML = "<button onClick='joinTeam(this)'>Join Team</button>";

    document.getElementById("optionsform").reset();
    var text = document.getElementById("options");
    text.style.display = "none";

    return false;
}

function joinTeam(button) {
    let row = button.parentNode.parentNode;
    let prevNames = row.cells[3].innerHTML;
    let name = document.getElementById('name').value;

    row.cells[3].innerHTML = prevNames + ', ' + name;
}

// Get available courts
import * as fs from 'fs';

const text = fs.readFileSync('../court_times.txt', 'utf8');

const lines = text.split('\n');

for (const line of lines) {
    let info = line.split(",");
    console.log(info)
    let sport = info[0];
    let courts = info[1];
    let time = info[2];

    if(sport == "Basketball") {
        document.getElementById("basketballcourt").innerHTML = `<h2 style='color: green'>OPEN on Main Gym Court(s) ${courts} ${time}`;
    }
}