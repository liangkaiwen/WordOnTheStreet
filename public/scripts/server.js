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
	firebaseRef.child(shoutoutID).update({"username" : username, "date": date, "title": title, "content" : content));

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