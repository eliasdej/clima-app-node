const axios = require('axios');

const getClima = async(lat, lng) =>{

	let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=58c9e3a62cc9890b0f7b232761684de5`)

	return resp.data.main.temp;
}

module.exports = {
	getClima
}