$(document).ready(function () {
	
	var countId = $.QueryString["c"];
	var url = 'counts/' + countId;
	
	$.get(url)
	.then(function (data) {
			
			console.log(data);
			startUp(data);
		}, function (error) {
		
			console.log(error);
			alert(error.responseText);
		}
	);
});