const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd6da08985msh0ecb906286abd63p1601eajsn19ad3f4f4689',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		cityName.innerHTML=city
		console.log(response)
	    cloud_pct.innerHTML=response.cloud_pct
		temp.innerHTML=response.temp
		feels_like.innerHTML=response.feels_like
		humidity.innerHTML=response.humidity
		min_temp.innerHTML=response.min_temp
		max_temp.innerHTML=response.max_temp
		wind_speed.innerHTML=response.wind_speed
		wind_degrees.innerHTML=response.wind_degrees
		sunrise.innerHTML=response.sunrise
		sunset.innerHTML=response.sunset

	})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Kolkata")


//for the frequently visited cities
//weather of Kolkata
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response2 => response2.json())
	.then(response2 => {
		
		console.log(response2)
	    kol_cloud_pct.innerHTML=response2.cloud_pct
		kol_temp.innerHTML=response2.temp
		kol_feels_like.innerHTML=response2.feels_like
		kol_humidity.innerHTML=response2.humidity
		kol_min_temp.innerHTML=response2.min_temp
		kol_max_temp.innerHTML=response2.max_temp
		kol_wind_speed.innerHTML=response2.wind_speed
		kol_wind_degrees.innerHTML=response2.wind_degrees
		kol_sunrise.innerHTML=response2.sunrise
		kol_sunset.innerHTML=response2.sunset

	})
	.catch(err => console.error(err));


//weather of Delhi
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response3 => response3.json())
	.then(response3 => {
		
		console.log(response3)
	    del_cloud_pct.innerHTML=response3.cloud_pct
		del_temp.innerHTML=response3.temp
		del_feels_like.innerHTML=response3.feels_like
		del_humidity.innerHTML=response3.humidity
		del_min_temp.innerHTML=response3.min_temp
		del_max_temp.innerHTML=response3.max_temp
		del_wind_speed.innerHTML=response3.wind_speed
		del_wind_degrees.innerHTML=response3.wind_degrees
		del_sunrise.innerHTML=response3.sunrise
		del_sunset.innerHTML=response3.sunset

	})
	.catch(err => console.error(err));

//weather of mumbai
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response4 => response4.json())
	.then(response4 => {
		
		console.log(response4)
	    mum_cloud_pct.innerHTML=response4.cloud_pct
		mum_temp.innerHTML=response4.temp
		mum_feels_like.innerHTML=response4.feels_like
		mum_humidity.innerHTML=response4.humidity
		mum_min_temp.innerHTML=response4.min_temp
		mum_max_temp.innerHTML=response4.max_temp
		mum_wind_speed.innerHTML=response4.wind_speed
		mum_wind_degrees.innerHTML=response4.wind_degrees
		mum_sunrise.innerHTML=response4.sunrise
		mum_sunset.innerHTML=response4.sunset

	})
	.catch(err => console.error(err));

//weather of chennai

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
	.then(response5 => response5.json())
	.then(response5 => {
		
		console.log(response5)
	    che_cloud_pct.innerHTML=response5.cloud_pct
		che_temp.innerHTML=response5.temp
		che_feels_like.innerHTML=response5.feels_like
		che_humidity.innerHTML=response5.humidity
		che_min_temp.innerHTML=response5.min_temp
		che_max_temp.innerHTML=response5.max_temp
		che_wind_speed.innerHTML=response5.wind_speed
		che_wind_degrees.innerHTML=response5.wind_degrees
		che_sunrise.innerHTML=response5.sunrise
		che_sunset.innerHTML=response5.sunset

	})
	.catch(err => console.error(err));


//weather of goa

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Goa', options)
.then(response6 => response6.json())
.then(response6 => {
	
	console.log(response6)
	goa_cloud_pct.innerHTML=response6.cloud_pct
	goa_temp.innerHTML=response6.temp
	goa_feels_like.innerHTML=response6.feels_like
	goa_humidity.innerHTML=response6.humidity
	goa_min_temp.innerHTML=response6.min_temp
	goa_max_temp.innerHTML=response6.max_temp
	goa_wind_speed.innerHTML=response6.wind_speed
	goa_wind_degrees.innerHTML=response6.wind_degrees
	goa_sunrise.innerHTML=response6.sunrise
	goa_sunset.innerHTML=response6.sunset

	})
	.catch(err => console.error(err));

//weather of lucknow

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Goa', options)
.then(response7 => response7.json())
.then(response7 => {
	
	console.log(response7)
	luc_cloud_pct.innerHTML=response7.cloud_pct
	luc_temp.innerHTML=response7.temp
	luc_feels_like.innerHTML=response7.feels_like
	luc_humidity.innerHTML=response7.humidity
	luc_min_temp.innerHTML=response7.min_temp
	luc_max_temp.innerHTML=response7.max_temp
	luc_wind_speed.innerHTML=response7.wind_speed
	luc_wind_degrees.innerHTML=response7.wind_degrees
	luc_sunrise.innerHTML=response7.sunrise
	luc_sunset.innerHTML=response7.sunset

	})
	.catch(err => console.error(err));

