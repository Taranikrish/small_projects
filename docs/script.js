const apikey="08204471063a020edc1e01d491b993c7";
const city=document.querySelector("select")
const citydiv=document.querySelector("#cityname");
const tempdiv=document.querySelector("#temp-p");
const icon=document.querySelector("#temp-icon");
const dis=document.querySelector("#description");
const card=document.querySelectorAll(".card");

// 

const humidity=document.getElementById('humidity');
const visibility=document.getElementById('visibility');
const airpressure=document.getElementById('airpressure');
const feel=document.getElementById('feel');
const speed=document.getElementById('speed');
const mintemp=document.getElementById('mintemp');

// 
window.addEventListener("DOMContentLoaded",()=>{
    data();
})
city.addEventListener("change", () => {
    data();
});

card.forEach(cards=>{
    cards.classList.add('w-auto','h-20','md:h-30','rounded-2xl', 'bg-[rgba(87,85,87,0.24)]','transform','transition-transform','duration-300','hover:scale-110','origin-center');
})



const data =async ()=> {

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city.value},IN&appid=08204471063a020edc1e01d491b993c7&units=metric`;
    const promise=await fetch(url);
    const citydata=await promise.json();
    citydiv.innerHTML=`<p class="md:text-xl text-xs  md:mt-0"><i class="fa-solid fa-location-dot "></i></p><p> ${citydata.name}</p>`
    tempdiv.innerHTML= ` <p class="text-xl md:text-3xl  md:mb-3">Temperature</p> <p class=" text-xs md:text-2xl">${citydata.main["temp"]}°C</p>`;
    icon.src=`https://openweathermap.org/img/wn/${citydata.weather[0].icon}@2x.png`
    dis.innerHTML=`<p>${citydata.weather[0].description}</p>`
    
    humidity.innerHTML= `<p class="md:text-xl text-xs p-1.5"><i class="fa-solid fa-droplet"></i></p>
    <p class="text-xl md:text-3xl">Humidity</p>
    <p class="text-xs md:text-xl p-1.5">${citydata.main["humidity"]}%</p>`

    visibility.innerHTML=`<p class="md:text-xl text-xs p-1.5"><i class="fa-solid fa-cloud"></i></i></p>
    <p class="md:text-3xl text-xl">Visibility</p>
    <p class="text-xs md:text-xl p-1.5">${citydata.clouds.all}%</p>`

    airpressure.innerHTML=`<p class="md:text-xl text-xs p-1.5"><i class="fa-solid fa-wind"></i></p>
    <p class="text-xl md:text-3xl">Air Pressure</p>
    <p class="text-xs md:text-xl p-1.5">${citydata.main["pressure"]}hpa</p>`

    feel.innerHTML=`<p class="md:text-xl text-xs p-1.5"><i class="fa-solid fa-temperature-low"></i></p>
    <p class="text-xl md:text-3xl">Feels like</p>
    <p class=" text-xs md:text-xl p-1.5">${citydata.main["feels_like"]}°</p>`

    speed.innerHTML=`<p class="md:text-xl text-xs p-1.5"><i class="fa-solid fa-water"></i></p>
    <p class="text-xl md:text-3xl">Wind Speed</p>
    <p class="text-xs md:text-xl p-1.5">${citydata.wind["speed"]}m/s</p>`;

    mintemp.innerHTML= `<p class="md:text-xl text-xs p-1.5"><i class="fa-solid fa-bars-staggered"></i></p>
    <p class="text-xl md:text-3xl">Ground Pressure</p>
    <p class="text-xs md:text-xl p-1.5 ">${citydata.main["grnd_level"]}hpa</p>`
}
