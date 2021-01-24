var button = document.querySelector('.button')
var inputvalue = document.querySelector('.inputvalue')
var namee = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

//fetching api from open source
button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=2ad548826c035894a5970b5b82d560c3')
.then(response => response.json())
.then(data => {
    var namevalue = data['name'];
    var tempvalue = data['main']['temp'];
    var descvalue = data['weather'][0]['description'];

    namee.innerHTML = namevalue;
    temp.innerHTML = "Temperature: "+tempvalue;
    desc.innerHTML = "Description: "+descvalue;
})

.catch(err => alert("Wrong city name"))
})



// https://
// fetch("https://community-open-weather-map.p.rapidapi.com/weather?q='+inputvalue.value+'3E&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "999237d70cmshcd4a9161e041397p1a0f16jsn00d69c12d866",
// 		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });


