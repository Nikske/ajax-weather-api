let input = document.getElementById("location");


// Function to calculate averages used later. -273 to convert Kelvin to Celsius
function calculateAverage(temps) {
    return Math.round((temps.reduce ((a,b) => a + b, 0) / temps.length) -273);
}

// Fetching the correct query by inserting the input value. Using a separate file to store my API keys
document.getElementById("run").addEventListener("click", function() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + input.value + openWeatherMap).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
            // City name
            document.getElementById("cityname").innerHTML= data['city']['name'];
            let currentDay = new Date().getDay();
            let dayOne = [];
            let dayTwo = [];
            let dayThree = [];
            let dayFour = [];
            let dayFive = [];
            for (let i=0; i<40; i++) {
                let dates = new Date(data['list'][i]['dt'] *1000).getDay();
                if (currentDay === dates) {
                    dayOne.push(data['list'][i]);
                    if (currentDay === 6) {
                        currentDay = 0;
                    }
                }
                if (currentDay + 1 === dates) {
                    dayTwo.push(data['list'][i]);
                    if (currentDay === 6) {
                        currentDay = 0;
                    }
                }
                if (currentDay + 2 === dates) {
                    dayThree.push(data['list'][i]);
                    if (currentDay === 6) {
                        currentDay = 0;
                    }
                }
                if (currentDay + 3 === dates) {
                    dayFour.push(data['list'][i]);
                    if (currentDay === 6) {
                        currentDay = 0;
                    }
                }
                if (currentDay + 4 === dates) {
                    dayFive.push(data['list'][i]);
                    if (currentDay === 6) {
                        currentDay = 0;
                    }
                }
            }
            console.log(dayOne);
            let tempsDayOne = [];
            for (let j = 0; j < dayOne.length; j++) {
                tempsDayOne.push(dayOne[j]['main']['temp']);
            }
            console.log(tempsDayOne);
            let dayOneAverage = calculateAverage(tempsDayOne);
            console.log(dayOneAverage);

            document.getElementById("temp1").innerHTML = dayOneAverage + " " + "&#8451";

            /* Old things that aren't correct */
            /* // List of all 40 temperatures, descriptions and icons.
            let tempList = [];
            let descriptionList = [];
            let iconList = [];
            for (let i = 0; i<40; i++) {
                tempList.push(data['list'][i]['main']['temp']);
                descriptionList.push(data['list'][i]['weather'][0]['description']);
                iconList.push(data['list'][i]['weather'][0]['icon']);
            }

            /* TEMPERATURES */ /*
            // Cutting all temperatures up in the 5 days
            let dayOne = tempList.slice(0,8);
            let dayTwo = tempList.slice(8,16);
            let dayThree = tempList.slice(16,24);
            let dayFour = tempList.slice(24,32);
            let dayFive = tempList.slice(32,40);
            // Temperature averages using the function defined earlier.
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

            /* DESCRIPTIONS */ /*
            // Cutting all descriptions up in the 5 days
            let descriptionDayOne = descriptionList.slice(0,8);
            let descriptionDayTwo = descriptionList.slice(8,16);
            let descriptionDayThree = descriptionList.slice(16,24);
            let descriptionDayFour = descriptionList.slice(24,32);
            let descriptionDayFive = descriptionList.slice(32,40); */

            /* // Inserting descriptions
            document.getElementById("descriptionDay1").innerHTML= descriptionDayOne[3];
            document.getElementById("descriptionDay2").innerHTML= descriptionDayTwo[3];
            document.getElementById("descriptionDay3").innerHTML= descriptionDayThree[3];
            document.getElementById("descriptionDay4").innerHTML= descriptionDayFour[3];
            document.getElementById("descriptionDay5").innerHTML= descriptionDayFive[3];


            /* ICONS */ /*
            // Cutting icons in the 5 days
            let iconsDayOne = iconList.slice(0,8);
            let iconsDayTwo = iconList.slice(8,16);
            let iconsDayThree = iconList.slice(16,24);
            let iconsDayFour = iconList.slice(24,32);
            let iconsDayFive = iconList.slice(32,40); */

           /* // Inserting icons
            document.getElementById("img1").src= "http://openweathermap.org/img/wn/" + iconsDayOne[4] + "@2x.png";
            document.getElementById("img2").src= "http://openweathermap.org/img/wn/" + iconsDayTwo[4] + "@2x.png";
            document.getElementById("img3").src= "http://openweathermap.org/img/wn/" + iconsDayThree[4] + "@2x.png";
            document.getElementById("img4").src= "http://openweathermap.org/img/wn/" + iconsDayFour[4] + "@2x.png";
            document.getElementById("img5").src= "http://openweathermap.org/img/wn/" + iconsDayFive[4] + "@2x.png";
            */

        });
        // Unsplash images
        fetch("https://api.unsplash.com/search/photos?query=" +input.value+ unsplash).then((response2) => {
                return response2.json();
        })
            .then((data2) => {
                //console.log(data2);
                let backgroundImage = data2['results'][1]['urls']['regular'];
                    document.body.style.backgroundImage = 'url('+backgroundImage+')';
            })
});