let fs = require('fs');
let textByLine = fs.readFileSync('court_times.txt').toString().split("\n");
if (textByLine.indexOf('') != -1){
  textByLine.splice(textByLine.indexOf('', 1));
}

// Keep track of which sports do not have open courts
let openCourts = [];

for (let i = 0; i < textByLine.length; i++) {
  court = textByLine[i]
  // Split by comma to get different components
  let courtParts = court.split(',');
  // See which sport is open
  let sport = courtParts[0]
  if (sport === "Basketball"){
    // let element = document.getElementById("basketballTimes");
    openCourts.push("Basketball");
    console.log("bball");
  }
  else if (sport == "Volleyball"){
    // let element = document.getElementById("volleyballTimes");
    openCourts.push("Volleyball");
    console.log("vball");
  }
  else{
    // let element = document.getElementById("badmintonTimes");
    openCourts.push("Badminton");
    console.log("badminton")
  }

  // Modify the innter HTML of the element
  // element.innerHTML =  `${courtParts[1]} courts open from ${courtParts[2]}`;
}

// Make sure closed courts say that they are closed
if (!openCourts.includes("Basketball")){
  console.log("empty bball")
  // let element = document.getElementById("basketballTimes"); 
  // element.innerHTML = "Closed for Drop-In";
}
if (!openCourts.includes("Volleyball")){
  console.log("empty vball")
  // let element = document.getElementById("volleyballTimes");
  // element.innerHTML = "Closed for Drop-In";
}
if (!openCourts.includes("Badminton")){
  console.log("empty badminton")
  // let element = document.getElementById("badmintonTimes");
  // element.innerHTML = "Closed for Drop-In";
}