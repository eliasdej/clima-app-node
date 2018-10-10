//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
	direccion: {
		alias: 'd',
		desc: 'Dirección de la ciudad para obtener el clima',
		demand: true
	}
}).argv;

let getInfo = async(direccion)=>{
	try{
		
		let coors = await lugar.getLugarLatLng(direccion);
		let temp = await clima.getClima(coors.lat, coors.lng);
		console.log("coors.lat, coors.lng", coors.lat +","+ coors.lng);

		return `El clima en ${ coors.direccion } es de ${ temp }º`;
	}catch(e){
		return `No se ha podido determinar el clima en ${direccion}`;
	}
}

getInfo(argv.direccion)
	.then(mensaje => console.log(mensaje))
	.catch(e => console.log(e));
