//default location hardcoded due to my VPN taking the marker to the middle of death valley, ca.
const geoMap = {
	coordinates: [],
	businesses: [],
	map: {},
	markers: {},
	circle: [],

	// leaflet map
    makeMap() {
		this.map = L.map('map').setView([36.11358, -115.16633], 12); 
        
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		minZoom: '14',
		}).addTo(this.map)
		
		// create and add geolocation marker
		const marker = L.marker([36.11358, -115.16633])//(this.coordinates) 
		marker
		.addTo(this.map)
		.bindPopup('<p1><b>You are here</b><br>Enjoy & have fun!</p1>')
		.openPopup()

		let circle = L.circle([36.11358, -115.16633], {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5,
			radius: 100
		}).addTo(this.map);

	},

	//markers
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

//coordinates via geolocation api
async function getCoords(){
	const pos = await new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject)
	});
	return [pos.coords.latitude, pos.coords.longitude]
}

//foursquare businesses

async function getFoursquare(business) {
	const options = {
		method: 'GET',
		headers: {
		Accept: 'application/json',
		Authorization: 'fsq3AiTE9OgH4txTa01imhHb5C4I7KniJvFBcQpzIIFpu7Q='
		}
	}
	let limit = 5
	let lat = [36.11358]//geoMap.coordinates[0]
	let lon = [-115.16633]//geoMap.coordinates[1]
	let response = await fetch(`https://api.foursquare.com/v3/places/search?&query=${business}&limit=${limit}&ll=${lat}%2C${lon}`, options)	
	let data = await response.text()
	let parsedData = JSON.parse(data)
	let businesses = parsedData.results
	return businesses
}

//foursquare array
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



window.onload = async () => {
	const coords = await getCoords()
	geoMap.coordinates = coords
	geoMap.makeMap()
}
    
// submit button
document.getElementById('submit').addEventListener('click', async (event) => {
	event.preventDefault()
	let business = document.getElementById('business').value
	let data = await getFoursquare(business)
	geoMap.businesses = processBusinesses(data)
	geoMap.addMarkers()
})


