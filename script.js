const city = document.querySelector(".d_city");
const submit = document.querySelector(".submit");
const temp = document.querySelector(".temp");
const d_city = document.querySelector(".city");
const humidity = document.querySelector(".humidity h6 span");
const wind = document.querySelector(".wind h6 span");
const content = document.querySelector(".main-content");
const getweather = (a)=>
{
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${a}`;
const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': 'f6b1e482efmsh2e4b4888c70d001p1a7addjsn5338190ebf7c',
'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
}
};
fetch(url, options)
.then(response => response.json())
.then(response => {
console.log(response)
temp.innerHTML = `${response.temp} C`
humidity.innerHTML =`${response.humidity}%`
wind.innerHTML= `${response.wind_speed} km/h`
})
.catch(err => console.log(err));
};
submit.addEventListener("click",()=>
{
getweather(city.value);
d_city.innerHTML = city.value;
content.style.display = 'block';
})