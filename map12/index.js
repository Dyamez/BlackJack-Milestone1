// map object
const geoMap = {
	coordinates: [36.11358, -115.16633],
	businesses: [], //'Giada', 'Lawry Prime Rib', '888 Japanese BBQ' [36.11489, -115.17232],[36.11509, -115.15983],[36.12292, -115.20772],
	map: { 
		//[58, 36.113-115.16633]
	},
	markers: {
		name: ['Giada', 'Lawry Prime Rib', '888 Japanese BBQ']
	},

	// build leafleworkMap
    makeMap() {
		this.map = L.map('map').setView([36.11358, -115.16633], 12); 
        /*
        ('map', {
		center: this.coordinates,
		zoom: 12,
		});
        */
		// add openstreetmap tiles
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		minZoom: '15',
		}).addTo(this.map)
		
		// create and add geolocation marker
		const marker = L.marker([36.11358, -115.16633])//(this.coordinates) //([36.11358, -115.16633])
		marker
		.addTo(this.map)
		.bindPopup('<p1><b>This is where you are.</b><br>Enjoy & have fun!</p1>')
		.openPopup()
		
		/*
		const marker = L.marker([36.11358, -115.16633]).addTo(map)
			.bindPopup('A pretty CSS popup.<br> Easily customizable.')
			.openPopup();
		*/
	},

	// add business markers
	addMarkers() {
		for (var i = 0; i < this.businesses.length; i++) {
		this.markers = L.marker([//14.581598869567165, 121.01277918468358])
			this.businesses[i].lat,
			this.businesses[i].long,
        ])
			.bindPopup(`<p1>${this.businesses[i].name}</p1>`)
			.addTo(this.map)
		}
	},
}

// get coordinates via geolocation api
async function getCoords(){
	const pos = await new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject)
	});
	return [pos.coords.latitude, pos.coords.longitude]
}

// get foursquare businesses
/*
const fetch = require('node-fetch');

const url = 'https://api.foursquare.com/v3/places/search';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'fsq3AiTE9OgH4txTa01imhHb5C4I7KniJvFBcQpzIIFpu7Q='
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
*/
async function getFoursquare(business) {
	const options = {
		method: 'GET',
		headers: {
		Accept: 'application/json',
		Authorization: 'fsq3AiTE9OgH4txTa01imhHb5C4I7KniJvFBcQpzIIFpu7Q='
		}
	}
	let limit = 5
	let lat = geoMap.coordinates[0]
	let lon = geoMap.coordinates[1]
	let response = await fetch('https://api.foursquare.com/v3/places/search', options)			//`https://api.foursquare.com/v3/places/search?&query=${business}&limit=${limit}&ll=${lat}%2C${lon}`
	let data = await response.text()
	let parsedData = JSON.parse(data)
	let businesses = parsedData.results
	return businesses
}

// process foursquare array
function processBusinesses(data) {
	let businesses = data.map((element) => {
		let location = {
			name: element.name,
			lat: element.geocodes.main.latitude,
			long: element.geocodes.main.longitude
		};
		return location
	})
	return businesses
}


// event handlers
// window load
window.onload = async () => {
	const coords = await getCoords()
	geoMap.coordinates = coords
	geoMap.makeMap()
}
    
// business submit button
document.getElementById('submit').addEventListener('click', async (event) => {
	event.preventDefault()
	let business = document.getElementById('business').value
	let data = await getFoursquare(business)
	geoMap.businesses = processBusinesses(data)
	geoMap.addMarkers()
})

let longTi = [
	[36.11489, -115.17232],
	[36.11509, -115.15983],
	[36.12292, -115.20772],
]
let polygon = L.polygon(longTi, {
    color: 'blue',
    fill: false,
}).addTo(geoMap)

// Create red pin marker
const redPin = L.icon({
    iconUrl: './assets/red-pin.png',
    iconSize: [38,38],
    iconAnchor: [19, 38]
})