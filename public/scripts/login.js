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

function displayCreateAccount() {
		var delay = 1000;
		setTimeout(function() {
			$("#sign-in").fadeOut(300);
			$("#createAccountDisplay").fadeIn(500);
		}, delay);
}
function createAccount() {
	
	$("#createAccount").submit(function() {
		var email = $("#email").val();
		var password = $("#password").val();
		var passwordVerify = $("#passwordVerify").val();
		if (password == passwordVerify) {
			createUser(email, password);
			testloading2();
		} else {
			form.elements[password].className = 'invalid-field'
			form.elements[passwordVerify].className = 'invalid-field'
			var errMsg = document.getElementById('error-message');
    		errMsg.innerHTML = 'Please provide values for the required fields';
    		errMsg.style.display = 'block';
		}
		
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

function testloading2() {
	$("#createAccount .row").animate({opacity: 0.5});
	$("#loadingscreen").fadeIn(500);
	var delay = 3000;
	setTimeout(function() {
		$("#createAccount").fadeOut(1000);
		$("#button").fadeIn(500);
		$("#map").animate({opacity: 1});
	}, delay);
}

