// 'use strict';




// Call this function when the page loads (the "ready" event)

$(document).ready(function() {
  initializePage();
}) 

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initGestures();
 	initRSVPForm();
}


$(function(){
		$("div.box").bind("taphold", tapholdHandler);
		function tapholdHandler(event){
			$(event.target).addClass("taphold");
		}
});



// init jQuery gestures  
function initGestures() {
	$(function(){
		$(".judge-img").bind("taphold", tapholdHandler);

		function tapholdHandler(event){
			var targetIDPrefix = event.target.id;
			console.log("got prefix: " + targetIDPrefix);

			$("#" + targetIDPrefix + "-bio").show();
		}
	});
}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here
}



