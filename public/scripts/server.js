var firebaseRef = new Firebase('https://word-on-the-street.firebaseio.com/');

var geoFire = new GeoFire(firebaseRef.child("shoutouts"));

var today = new Date();
var time = today.getTime();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+'/'+dd+'/'+yyyy;

var shoutoutsInQuery = {};

var geoQuery = geoFire.query({
  center: center,
  radius: radiusInKm
});

firebaseRef.forEach(function(child) {
	console.log(child.location.latitude);
});















function postShoutout(longValue, latValue, category, userName, date, time, title, description) {
	var firebaseRef = new Firebase('https://word-on-the-street.firebaseio.com/shoutouts');
	firebaseRef.set({

	  location: {
	    longitude: longValue,
	    latitude: latValue
	  },

	  type: category,

	  username: userName,

	  timestamp: {
	  	date: today,
	  	time: time,
	  },

	  title: title,

	  description: description

	});
}

function postShoutoutComment(userName, today, time, description) {
	var firebaseRef = new Firebase('https://word-on-the-street.firebaseio.com/shoutouts/comments');
	firebaseRef.set({

	  username: userName,

	  timestamp: {
	  	date: today,
	  	time: time,
	  },

	  comment: description

	});
}

function testShoutout() {
	//postShoutout(11.02,-20.81,"Tech","SassMaiden25",getDate(), "WATCH OUT", "THERE'S ICE ERRRRYWHERE");
	var firebaseRef = new Firebase('https://word-on-the-street.firebaseio.com/shoutouts');
	
	firebaseRef.push({
	  location: {
	    longitude: longValue,
	    latitude: latValue
	  },

	  type: category,

	  username: userName,

	  timestamp: {
	  	date: today,
	  	time: time,
	  },

	  title: title,

	  description: description

	});

	//firebaseRef.child('shoutouts').orderByChild('username').equalTo('Test2').on('child_added',function(snapshot) {
	//	var a = snapshot.val();
	//	console.log(a);
	//});
		
	//firebaseRef.on("value", function(snapshot) {
 	// 	console.log(snapshot.val());
	//});
}

function testShoutout2() {
	var firebaseRef = new Firebase('https://word-on-the-street.firebaseio.com/shoutouts/comments');
	firebaseRef.set({

	  username: "userName",

	  timestamp: {
	  	date: today,
	  	time: time,
	  },

	  comment: description

	});
}

function changeRating(username, value) {
	var ratingValue = document.getElementById("rating");
}