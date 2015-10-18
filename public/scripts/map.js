//initializes Google Map
var initMap = function() {
	//getLocation();
	var map = new google.maps.Map($("#map")[0], {
    	center: {lat: -34.397, lng: 150.644},
    	scrollwheel: false,
    	zoom: 13
  	});

  	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(function(position) {
  			var pos = {
        		lat: position.coords.latitude,
       		 	lng: position.coords.longitude
      		};
      		
      		map.setCenter(pos);

      		var userMarker = new google.maps.Marker({
      			position: pos,
      			map: map,
      			draggable: false,
      			animation: google.maps.Animation.DROP,
      			title: "We are here"
      		});

  		}, function() {
  			console.log("GPS location access denied");
  		});
  	} else {
  		//Device does not support Geolocation
  		console.log("Device not supported");
  	}
}