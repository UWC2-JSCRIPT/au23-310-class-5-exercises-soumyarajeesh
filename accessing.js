// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const weatherHead= document.getElementById("weather-head");
    weatherHead.textContent = "February 10 Weather Forecast, Seattle";

// Change the styling of every element with class "sun" to set the color to "orange"
const sunElements = document.querySelectorAll(".sun");
      sunElements.forEach((element) => {
        element.style.color = "orange";
      });


// Change the class of the second <li> from to "sun" to "cloudy"
const secondLi = document.querySelector("ul li:nth-child(2)");
      secondLi.classList.remove("sun");
      secondLi.classList.add("cloudy");