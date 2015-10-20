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


// must retrieve post that are around the user --how?


function postShoutout(location, username, date, time, title, description) {
	var firebaseRef = new Firebase('https://word-on-the-street.firebaseio.com/shoutouts');
	
	var geoFire = new GeoFire(firebaseRef);
	var shoutoutID = firebaseRef; // need to add acessor for retrieving userID
	geoFire.set(shoutoutID, location).then(function() {
		firebaseRef.child(shoutoutID).update({"username" : username, "title": title, "content" : content});
	});
}

function postShoutoutComment(username, title, content, location) {
	var firebaseRef = new Firebase('https://word-on-the-street.firebaseio.com/shoutouts');
	
	var geoFire = new GeoFire(firebaseRef);
	var userID = firebaseRef;
	geoFire.set(userID, [11.1,13.0]).then(function() {
		firebaseRef.child(userID).update({"username" : username, "title": title, "content" : content, "date" : today});
	});
}

function createAccount(userName, password) {
	var firebaseRef = new Firebase('https://word-on-the-street.firebaseio.com/users');
}

function testShoutout() {
	var firebaseRef = new Firebase('https://word-on-the-street.firebaseio.com/shoutouts');
	
	/*firebaseRef.orderByChild("userID").limitToLast(1).on("child_added", function(snapshot) {
		console.log(snapshot.val());
	});*/ // can retrieve last post

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