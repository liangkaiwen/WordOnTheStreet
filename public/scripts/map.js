var initMap = function() {
	//Add map div to app
	$("app").append($("<div>", {id: "map"}));
	var map = new google.maps.Map($("#map"), {
    center: {lat: -34.397, lng: 150.644},
    scrollwheel: false,
    zoom: 8
  });
}