const apikey="179e6d8c55955208128485df83a316b1";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city=document.querySelector('#searchbox input')
const schbtn=document.querySelector('#searchbox button')

async function checkweather(pp){
	const res= await fetch(url+pp+`&appid=${apikey}`);
	const data= await res.json();
	console.log(data);
	document.querySelector('#cityname').innerHTML= data.name;
	document.querySelector('.tempra').innerHTML=data.main.temp+"&degC";
	document.querySelector('.min_temp').innerHTML=data.main.temp_min;
	document.querySelector('.max_temp').innerHTML=data.main.temp_max;

	document.querySelector('.humid').innerHTML=data.main.humidity+"%";
	document.querySelector('.pct').innerHTML=data.main.pressure;
	document.querySelector('.feel').innerHTML=data.main.feels_like;
    document.querySelector('.visiable').innerHTML=data.visibility;
	document.querySelector('.speed').innerHTML=data.wind.speed+"km/h";
	document.querySelector('.degree').innerHTML=data.wind.deg;
	document.querySelector('.gust').innerHTML=data.wind.gust;
	document.querySelector('.des').innerHTML=data.main.sea_level;
	document.querySelector('.rise').innerHTML=data.sys.sunrise;
	
}

schbtn.addEventListener('click', ()=>{
	checkweather(city.value)
})
