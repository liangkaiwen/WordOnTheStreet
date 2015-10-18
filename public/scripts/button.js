$(window).load(function() {
	button();
})

function button() {
	$('#button').click(function() {
		$('#addinfo').fadeIn(100);
	});
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