function initMap() {
	// add your code here
	var UCSD_ltlng = {lat:32.878892, lng:-117.235702};

	var map = new google.maps.Map(document.getElementById('map'), {
		center: UCSD_ltlng,
		zoom: 15
	});


	var marker = new google.maps.Marker({
		position: UCSD_ltlng,
		map: map,
		title: "UCSD"
	});

}