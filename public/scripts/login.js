$(window).load(function() {
	login();
});

function login() {
	$("#login").submit(function() {
		var email = $("#email").val();
		var password = $("#password").val();
		authenicateUser(email, password);
		testloading();
	});
}

function testloading() {
	$("#sign-in .row").animate({opacity: 0.5});
	$("#loadingscreen").fadeIn(500);
	var delay = 3000;
	setTimeout(function() {
		$("#sign-in").fadeOut(1000);
		$("#button").fadeIn(500);
		$("#map").animate({opacity: 1});
	}, delay);
}

