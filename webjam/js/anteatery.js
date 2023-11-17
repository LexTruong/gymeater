let curTime = new Date()
let date = curTime.toLocaleDateString();
let day = curTime.getDay();
let min = curTime.getMinutes();
let hour = curTime.getHours();
let mealTime;
if(day == 0 || day == 6) {
    if(hour >= 9 && hour < 11) mealTime = "48";
    else if(hour >= 11 && hour <= 16) mealTime = "265";
    else if(hour == 16) {
        if(min < 30) mealTime = "265";
        else mealTime = "107"
    }
    else if(hour >= 16 && hour < 20) mealTime = "107";
    else mealTime = "CLOSED";
} else {
    if((hour >= 7 && min >= 15) && hour < 11) mealTime = "48";
    else if(hour >= 11 && hour <= 16) mealTime = "106";
    else if(hour == 16) {
        if(min < 30) mealTime = "106";
        else mealTime = "107"
    }
    else if(hour >= 16 && hour < 20) mealTime = "107";
    else if(hour >= 20 && hour <= 23) {
        if(day == 5) mealTime = "CLOSED";
        else mealTime = "108"
    }
    else mealTime = "CLOSED";
}

if(mealTime == "CLOSED") document.getElementById("CLOSED").innerHTML = "CLOSED";
else {
    let response = fetch("https://corsproxy.io/?" + encodeURIComponent("https://uci.campusdish.com/api/menu/GetMenus?locationId=3056&storeIds=&mode=Daily&date=" + date + "&time=&periodId=" + mealTime + "&fulfillmentMethod="),
    {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
    },
    }).then(response => response.json()).then(data => {
        let menuItems = data.Menu.MenuProducts;
        let table = document.getElementById("foods");
        let count = 0;

        menuItems.forEach((item) => {
            let proteinCalorieRatio = item.Product.Calories / item.Product.Protein;
            let rating;
            let row;
            if(proteinCalorieRatio < 10) {
                rating = "GREAT";
                row = table.insertRow(0);
                count++;
            } else if(proteinCalorieRatio < 25) {
                rating = "MID";
                row = table.insertRow(count);
            } else {
                rating = "BAD";
                row = table.insertRow(-1);
            }
            
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);

            cell1.innerHTML = `<h2 class="food">${item.Product.MarketingName}</h2>`;
            cell2.innerHTML = `
                <h2>${rating}</h2>
                <p>Calories: ${item.Product.Calories}</p>
                <p>Protein: ${item.Product.Protein}</p>
                <p>Total Fat: ${item.Product.TotalFat}</p>
                <p>Saturated Fat: ${item.Product.SaturatedFat}</p>
                <p>Trans Fat: ${item.Product.TransFat}</p>
                <p>Sugar: ${item.Product.Sugars}</p>
                <p>Sodium: ${item.Product.Sodium}</p>
                <p>Iron: ${item.Product.Iron}</p>
                <p>Vitamin A: ${item.Product.VitaminA}</p>
                <p>Vitamin C: ${item.Product.VitaminC}</p>
            `;
        })
    })
}
