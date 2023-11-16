let response = fetch("https://corsproxy.io/?" + encodeURIComponent("https://uci.campusdish.com/api/menu/GetMenus?locationId=3056&storeIds=&mode=Daily&date=11/15/2023&time=&periodId=106&fulfillmentMethod="),
    {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
    },
}).then(response => response.json()).then(data => {
    let menuItems = data.Menu.MenuProducts;

    menuItems.foreach((item) => {
        
    })

    console.log(menuItems);
})



