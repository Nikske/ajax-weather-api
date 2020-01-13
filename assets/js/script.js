let input = document.getElementById("location");
// Function to calculate averages used later. -273 to convert Kelvin to Celsius
function calculateAverage(temps) {
    return Math.round((temps.reduce ((a,b) => a + b, 0) / temps.length) -273);
}


document.getElementById("run").addEventListener("click", function() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + input.value + "&appid=6658b1d8b2b559dffe057f324f9d8eed").then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
            // City name
            document.getElementById("cityname").innerHTML= data['city']['name'];
            // List of all 40 temperatures, descriptions and icons
            let tempList = [];
            let descriptionList = [];
            let iconList = [];
            for (let i = 0; i<40; i++) {
                tempList.push(data['list'][i]['main']['temp']);
                descriptionList.push(data['list'][i]['weather'][0]['description']);
                iconList.push(data['list'][i]['weather'][0]['icon']);
            }

            /* TEMPERATURES */
            // Cutting all temperatures up in the 5 days
            let dayOne = tempList.slice(0,8);
            let dayTwo = tempList.slice(8,16);
            let dayThree = tempList.slice(16,24);
            let dayFour = tempList.slice(24,32);
            let dayFive = tempList.slice(32,40);
            // Temperature averages.
            let tempDayOne = calculateAverage(dayOne);
            let tempDayTwo = calculateAverage(dayTwo);
            let tempDayThree = calculateAverage(dayThree);
            let tempDayFour = calculateAverage(dayFour);
            let tempDayFive = calculateAverage(dayFive);

            // Inserting temperatures
            document.getElementById("temp1").innerHTML= tempDayOne + " " + "&#8451";
            document.getElementById("temp2").innerHTML= tempDayTwo + " " + "&#8451";
            document.getElementById("temp3").innerHTML= tempDayThree + " " + "&#8451";
            document.getElementById("temp4").innerHTML= tempDayFour + " " + "&#8451";
            document.getElementById("temp5").innerHTML= tempDayFive + " " + "&#8451";

            /* DESCRIPTIONS */
            // Cutting all descriptions up in the 5 days
            let descriptionDayOne = descriptionList.slice(0,8);
            let descriptionDayTwo = descriptionList.slice(8,16);
            let descriptionDayThree = descriptionList.slice(16,24);
            let descriptionDayFour = descriptionList.slice(24,32);
            let descriptionDayFive = descriptionList.slice(32,40);
            console.log(descriptionDayTwo);

            // Inserting descriptions - Day & night
            document.getElementById("descriptionDay1").innerHTML= "Day: " + descriptionDayOne[3];
            document.getElementById("descriptionNight1").innerHTML= "Night: " + descriptionDayOne[6];
            document.getElementById("descriptionDay2").innerHTML= "Day: " + descriptionDayTwo[3];
            document.getElementById("descriptionNight2").innerHTML= "Night: " + descriptionDayTwo[6];
            document.getElementById("descriptionDay3").innerHTML= "Day: " + descriptionDayThree[3];
            document.getElementById("descriptionNight3").innerHTML= "Night: " + descriptionDayThree[6];
            document.getElementById("descriptionDay4").innerHTML= "Day: " + descriptionDayFour[3];
            document.getElementById("descriptionNight4").innerHTML= "Night: " + descriptionDayFour[6];
            document.getElementById("descriptionDay5").innerHTML= "Day: " + descriptionDayFive[3];
            document.getElementById("descriptionNight5").innerHTML= "Night: " + descriptionDayFive[6];


        })
});