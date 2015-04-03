var times_ran = 0;
$(document).ready(function() {
	if(times_ran == 0) {
		$('.intro').delay(1200).fadeIn(3500);
		$('.second_line').delay(3750).fadeIn(3000).delay(2500).fadeOut(3000);
	times_ran++;
	};	
});





