$(document).ready(function() {
	$(".people").click( 
		function(){
			$(this).toggleClass("minus");
			$(this).next().slideToggle(500);
		}
	);
	
}); // end ready
