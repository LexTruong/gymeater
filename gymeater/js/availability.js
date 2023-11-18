// Reads JSON file and changes HTML
fetch('../../court_info.json').then(response => response.json()).then(data => {
    let lines = data.lines;
    lines.forEach((line) => {
      let sport = line.name;
      let times = line.times;
  
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
