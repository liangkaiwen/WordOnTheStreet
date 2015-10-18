$(window).load(function() {
	button();
})

function button() {
	$('#button').click(function() {
		var state = $('#button').text()
		if(state == '+') {
			$('#addinfo').fadeIn(100);
			$('#button').html('-');	
		} else {
			$('#addinfo').fadeOut(100);
			$('#button').html('+');
		}
		
	});
	$('#map').click(function() {
		$('#addinfo').fadeOut(100);
		$('#button').html('+');
	})
}
/*document.addEventListener("DOMContentLoaded", function() {
	var button = document.getElementById('button');
	$('#button').click(function() {
		alert("asdfdsadf");
	});
	button.addEventListener('click', function() {
		if (window.confirm('Are you sure you want to leave?')) {
            window.location = 'http://www.google.com';
        }
	});
});*/ 