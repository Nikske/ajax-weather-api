let input = document.getElementById("location");


document.getElementById("run").addEventListener("click", function() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + input.value + "&appid=6658b1d8b2b559dffe057f324f9d8eed").then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
            // City name
            document.getElementById("cityname").innerHTML= data['city']['name'];
            
            let tempList = [];
            for (let i = 0; i<40; i++) {
                tempList.push(data['list'][i]['main']['temp']);
            }

            console.log(tempList);

        })
});