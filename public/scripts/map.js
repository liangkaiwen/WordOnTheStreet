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

          /*var shoutouts = server.getShoutouts(pos.lat, pos.lng, 1000);
          for (var i = 0; i < shoutouts.length; i++) {
            var shoutout = shoutouts[i];
            var shoutoutMarker = new google.maps.Marker({
              position: shoutout.location,
              map: map,
              draggable: false,
              animation: google.maps.Animation.DROP
            });
          }*/

      		map.setZoom(13);

  		}, function() {
  			console.log("GPS location access denied");
  		});
  	} else {
  		//Device does not support Geolocation
  		console.log("Device not supported");
  	}
}