$(window).load(function() {
	$("#createAccount").submit(function() {
		createAccount();
		return false;
	});

	$("#login").submit(function() {
		login();
		return false;
	});
});

function login() {
	$("#login").submit(function() {
		var email = $("#email").val();
		var password = $("#password").val();
		authenicateUser(email, password);
		testloading();
	});
}

function displayCreateAccount() {
		var delay = 1000;
		setTimeout(function() {
			$("#sign-in").fadeOut(300);
			$("#createAccountDisplay").fadeIn(500);
		}, delay);
}
function createAccount() {
	var email = $("#accEmail").val();
	var password = $("#accPassword").val();
	var passwordVerify = $("#accPasswordVerify").val();
	if (password === passwordVerify) {
		createUser(email, password);
		authenicateUser(email, password);
		testloading2();
	} else {
		var errMsg = document.getElementById('error-message');
		errMsg.innerHTML = 'Please provide values for the required fields';
		errMsg.style.display = 'block';
	}
		
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

function testloading2() {
	$("#createAccountDisplay").animate({opacity: 0.5});
	$("#loadingscreen").fadeIn(500);
	var delay = 1000;
	setTimeout(function() {
		$("#createAccountDisplay").fadeOut(500);
		$("#button").fadeIn(500);
		$("#map").animate({opacity: 1});
	}, delay);
}

