// Create map:                                                       
const theMap = L.map('map').setView([48.87007, 2.342130], 18);



// Add openstreetmap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(theMap);


//Note: Replace 'https://.tile.openstreetmap.org///.png' with 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' in this copy/paste part in the Canvas activity instructions


// Create and add a geolocation marker

const marker = L.marker([36.11358, -115.16633])
marker.addTo(theMap).bindPopup('<p1><b>You are Here!</b></p1>').openPopup()




// Draw the 2nd Arrondissement   
let longTi = [                                        
    [36.11489, -115.17232],
    [36.11509, -115.15983],
    [36.12292, -115.20772],
    [36.10785, -115.1724],
    [36.10128, -115.18221],
    [36.1016, -115.18952],
]

let polygon = L.polygon(longTi, {
    color: 'blue',
    fill: false,
}).addTo(theMap)

// Create red pin marker
const redPin = L.icon({
    iconUrl: './assets/red-pin.png',
    iconSize: [38,38],
    iconAnchor: [19, 38]
})


/// Metro station markers:
const gr = L.marker([36.11489, -115.17232], {icon: redPin}).bindPopup('Giadas Restaurant')
const lsh = L.marker([36.11509, -115.15983], {icon: redPin}).bindPopup('Lawrys Steak House')
const japr = L.marker([36.12292, -115.20772], {icon: redPin}).bindPopup('888 Japanese Restaurant')
const tmt = L.marker([36.10785, -115.1724], {icon: redPin}).bindPopup('Tex Mex Tequila')
const iob = L.marker([36.10128, -115.18221], {icon: redPin}).bindPopup('In&Out Hamburgers')
const sje = L.marker([36.1016, -115.18952], {icon: redPin}).bindPopup('Simon & Joes Eatery')

const stations = L.layerGroup([gr, lsh, japr, tmt, iob, sje]).addTo(theMap)



/*
const myMap = {
	coordinates: [],
	businesses: [],
	map: {},
	markers: {},

	// leaflet
	buildMap() {
		this.map = L.map('map').setView([36.11358, -115.16633], 12);
		
		// openstreetmap
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		minZoom: '15',
		}).addTo(this.map)
		// geomarker
		const marker = L.marker([36.11358, -115.16633])
		marker
		.addTo(this.map)
		.bindPopup('<p1><b>You are here</b><br></p1>')
		.openPopup()
	},

	// business
	addMarkers() {
		for (var i = 0; i < this.businesses.length; i++) {
		this.markers = L.marker([
			this.businesses[i].lat,
			this.businesses[i].long,
		])
			.bindPopup(`<p1>${this.businesses[i].name}</p1>`)
			.addTo(this.map)
		}
	},
}
/*
var polygon = L.polygon([
    [36.11489, -115.17232],
    [36.11509, -115.15983],
    [36.12292, -115.20772],
]).addTo(map);
*/
/*
// coordinates api
async function getCoords(){
	const pos = await new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject)
	});
	return [pos.coords.latitude, pos.coords.longitude]
}

// foursquare
async function getFoursquare(business) {
	const options = {
		method: 'GET',
		headers: {
		Accept: 'application/json',
		Authorization: 'fsq3AiTE9OgH4txTa01imhHb5C4I7KniJvFBcQpzIIFpu7Q='
		}
	}
	let limit = 5
	let lat = myMap.coordinates[0]
	let lon = myMap.coordinates[1]
	let response = await fetch(`https://api.foursquare.com/v3/places/search?&query=${business}&limit=${limit}&ll=${lat}%2C${lon}`, options)
	let data = await response.text()
	let parsedData = JSON.parse(data)
	let businesses = parsedData.results
	return businesses
}
//foursquare data array
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
	myMap.coordinates = coords
	myMap.buildMap()
}

// business submit button
document.getElementById('submit').addEventListener('click', async (event) => {
	event.preventDefault()
	let business = document.getElementById('business').value
	let data = await getFoursquare(business)
	myMap.businesses = processBusinesses(data)
	myMap.addMarkers()
})
*/