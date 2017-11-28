$(document).ready(function(){
	window.addEventListener("load", startAnimation);
    //source for smooth scrolling: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
	// Add smooth scrolling to all links
	$("li a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 800, function(){

		    // Add hash (#) to URL when done scrolling (default click behavior)
		    window.location.hash = hash;
		  });
		} // End if
	});

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 500) {
	        $("nav").addClass("bg-dark");
	    } else {
	        $("nav").removeClass("bg-dark");
	    }
	});
});

function startAnimation() {
	// $('.fly-in-text li:nth-child(1)').removeClass('hidden');
	// $('.fly-in-text li:nth-child(2)').removeClass('hidden');	
	// $('.fly-in-text li:nth-child(3)').removeClass('hidden');
	// $('#logo').removeClass('hidden');
	// $('#landing-img').removeClass('hidden');
	// setTimeout(function() {
	// 	$('.fly-in-text li:nth-child(1)').removeClass('transition-hidden');
	// }, 1000);

	// setTimeout(function() {
	// 	$('.fly-in-text li:nth-child(2)').removeClass('transition-hidden');
	// }, 2500);

	// setTimeout(function() {
	
	// 	$('.fly-in-text li:nth-child(3)').removeClass('transition-hidden');
	// }, 4000);
	setTimeout(function() {
		$('.navbar-nav li:nth-child(1)').removeClass('no-opacity');
	}, 380);
	setTimeout(function() {
		$('.navbar-nav li:nth-child(2)').removeClass('no-opacity');
	}, 460);
	setTimeout(function() {
		$('.navbar-nav li:nth-child(3)').removeClass('no-opacity');
	}, 540);
	setTimeout(function() {
		$('.navbar-nav li:nth-child(4)').removeClass('no-opacity');
	}, 620);
	setTimeout(function() {
		$('.navbar-nav li:nth-child(5)').removeClass('no-opacity');
	}, 700);
	setTimeout(function() {
		$('#landing-img').removeClass('no-opacity');
	}, 780);
	setTimeout(function() {
		$('#logo').removeClass('no-opacity');
	}, 4000);
}