// Reads JSON file and changes HTML
fetch('../../court_info.json').then(response => response.json()).then(data => {
    let lines = data.lines;
    console.log(data)
    console.log(lines)
    lines.forEach((line) => {
      let sport = line.name;
      let times = line.times;
      console.log(sport)
      console.log(times)
  
    if(sport == "Basketball"){
      let element = document.getElementById("basketballTimes");
      element.innerHTML = `<h3 style='color: green'>OPEN on Main Gym Courts 1 and 2 from ${times}</h3>`;
    }
    else if(sport == "Volleyball"){
      let element = document.getElementById("volleyballTimes");
      element.innerHTML = `<h3 style='color: green'>OPEN on Main Gym Court 3 from ${times}</h3>`;
    }
    else {
      let element = document.getElementById("badmintonTimes");
      element.innerHTML = `<h3 style='color: green'>OPEN in Back Court Gym from ${times}</h3>`;
    }
    })
  })

  // Get available courts
// import * as fs from 'fs';

// const text = fs.readFileSync('../court_times.txt', 'utf8');

// const lines = text.split('\n');

// for (const line of lines) {
//     let info = line.split(",");
//     console.log(info)
//     let sport = info[0];
//     let courts = info[1];
//     let time = info[2];

//     if(sport == "Basketball") {
//         document.getElementById("basketballcourt").innerHTML = `<h2 style='color: green'>OPEN on Main Gym Court(s) ${courts} ${time}`;
//     }


// }

// Controls open courts
// Grabs text from the file w/ scraping info as a list
// let fs = require('fs');
// let textByLine = fs.readFileSync('court_times.txt').toString().split("\n");

// // Keep track of which sports do not have open courts
// let openCourts = [];

// for (let i = 0; i < textByLine.length; i++) {
//   court = textByLine[i]
//   // Split by comma to get different components
//   let courtParts = court.split(',');
//   // See which sport is open
//   let sport = courtParts[0]
//   if (sport === "Basketball"){
//     let element = document.getElementById("basketballTimes");
//     openCourts.push("Basketball");
//   }
//   else if (sport == "Volleyball"){
//     let element = document.getElementById("volleyballTimes");
//     openCourts.push("Volleyball");
//   }
//   else{
//     let element = document.getElementById("badmintonTimes");
//     openCourts.push("Badminton");
//   }

//   // Modify the innter HTML of the element
//   element.innerHTML =  `${courtParts[1]} courts open from ${courtParts[2]}`;
// }

// // Make sure closed courts say that they are closed
// if (!openCourts.includes("Basketball")){
//   let element = document.getElementById("basketballTimes"); 
//   element.innerHTML = "Closed for Drop-In";
// }
// if (!openCourts.includes("Volleyball")){
//   let element = document.getElementById("volleyballTimes");
//   element.innerHTML = "Closed for Drop-In";
// }
// if (!openCourts.includes("Badminton")){
//   let element = document.getElementById("badmintonTimes");
//   element.innerHTML = "Closed for Drop-In";
// }