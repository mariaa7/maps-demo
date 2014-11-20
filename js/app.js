/* app.js -- our application code */

"use strict";

// UW coordinates:
// lat: 47.655
// lng: -122.3080

var mapOptions = {
	center: {lat: 47.655, lng: -122.3080},
	zoom: 14 //0=Earth to 21=max zoom
}

//add ou map to the page in the "map" div
var mapElem = document.getElementById('map');

//create the map
var map= new google.maps.Map(mapElem, mapOptions);

//marker positions
//values MUST be numbers and not strings
var position = {
	lat: 47.655,
	lng: -122.3080
}

/*var marker = new google.maps.Marker({
	position: position,
	map: map
});*/

//remove the marker from the map
//marker.setMap(null);

//readd the marker from  memory
//marker.setMap(map);

var infoWin = new google.maps.InfoWindow();

function onGeoPos(position) {
	console.log(position);

	var myLocation = new google.maps.Marker({
		position: {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		},
		map: map
	});

	//create a new infoWindow
	

	//set the content (may contain html tags)
	infoWin.setContent('<p>Hello World! My lat is ' +
		position.coords.latitude + ' and my lng is ' +
		position.coords.longitude + '<p>');

	

	google.maps.event.addListener(myLocation, 'click', onMarkerClick)
}

function onGeoErr(error) {
	//error codes here
}

if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(onGeoPos, 
		onGeoErr, {enableHighAccuracy: true, maximumAge: 30000});
} else {
	console.log("geolocation not supported");
}

function onMarkerClick() {
	//'this' keyword will refer to the marker object

	//pan the map so that the marker is at the center
	map.panTo(this.getPosition());
	infoWin.open(map, this)
}

$.getJSON('http://data.seattle.gov/resource/65fc-btcc.json')
	.done(function(data) {

	})
	.fail(function(error) {

	})
	.always(function() {

	});















