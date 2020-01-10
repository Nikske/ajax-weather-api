let input = document.getElementById("location");
let cityName = document.getElementById("cityname");

document.getElementById("run").addEventListener("click", function() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + input.value + "&appid=6658b1d8b2b559dffe057f324f9d8eed").then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
            let dataName = data['city']['name'];

            cityName.innerHTML = dataName;
        })
});