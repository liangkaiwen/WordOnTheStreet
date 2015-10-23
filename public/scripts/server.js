/*
var server = {
	//return all shoutout objects as an array
	getShoutouts: function(lat, lng, radius) {
		output = [];
		$.getJSON('data/shoutouts.json', function(data) {
			for (var i = 0; i < data.shoutouts.length; i++) {
				console.log("ran");
				var shoutout = data.shoutouts[i];
				console.log(shoutout);
				var shoutoutLoc = shoutout.location;
				if (this.distance(lat, lng, shoutoutLoc.lat, shoutoutLoc.lng, "K") < radius) {
					output.push(shoutout);
				}
			}
		});
		return output;
	},
	distance: function(lat1, lon1, lat2, lon2, unit) {
		var radlat1 = Math.PI * lat1/180
		var radlat2 = Math.PI * lat2/180
		var radlon1 = Math.PI * lon1/180
		var radlon2 = Math.PI * lon2/180
		var theta = lon1-lon2
		var radtheta = Math.PI * theta/180
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		dist = Math.acos(dist)
		dist = dist * 180/Math.PI
		dist = dist * 60 * 1.1515
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist
	}
*/

var today = new Date();
var time = today.getTime();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+'/'+dd+'/'+yyyy;


function postShoutout(location, username, date, title, content) {
	var firebaseRef = new Firebase('https://word-on-the-street.firebaseio.com/shoutouts');
	
	var geoFire = new GeoFire(firebaseRef);
	var newShoutoutRef = firebaseRef.push(); 
	var shoutoutID = newShoutoutRef.key();
	geoFire.set(shoutoutID, location);
	firebaseRef.child(shoutoutID).update({"username" : username, "date": date, "title": title, "content" : content});

}

function createUser(email, password) {
	var firebaseRef = new Firebase('https://word-on-the-street.firebaseio.com/');
	firebaseRef.createUser({
		email	 : email,
		password : password
	}, function(error, userData) {
	  if (error) {
	    console.log("Error creating user:", error);
	  } else {
	    console.log("Successfully created user account with uid:", userData.uid);
  		}
  	});
}

function authenicateUser(email, password) {
	var firebaseRef = new Firebase('https://word-on-the-street.firebaseio.com/');
	firebaseRef.authWithPassword({
	 	email    : email,
	 	password : password
	}, function(error, authData) {
	  if (error) {
	    console.log("Login Failed!", error);
	  } else {
	    console.log("Authenticated successfully with payload:", authData);
	  }
	});
}

function postShoutoutComment(username, title, content, location) {
	var firebaseRef = new Firebase('https://word-on-the-street.firebaseio.com/shoutouts');

}

function testShoutout() {
	postShoutout([-1.2,30.40], "eyiaaaa", today, "Hello", "Testing this shit")
	/*firebaseRef.orderByChild("userID").limitToLast(1).on("child_added", function(snapshot) {
		console.log(snapshot.val());
	});*/ // can retrieve last post

}
