$(document).ready(function(){
	window.addEventListener("load", startAnimation);
	$(function() {
        $('.lazy').Lazy();
    });
	function isScrolledIntoView(elem)
	{
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}	    
    //source for smooth scrolling: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
	// Add smooth scrolling to all links
	$("li a, #about-button").on('click', function(event) {

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
	        $("nav").addClass("bg-custom");
	        $("#collapse-button").removeClass("mt-3");
	        $("#collapse-button").removeClass("mr-3");
	        $("#about-me-header").removeClass("no-opacity");
	    } else {
	        $("nav").removeClass("bg-custom");
	       	$("#collapse-button").addClass("mt-3");
	        $("#collapse-button").addClass("mr-3");
	    }
	});
});

function startAnimation() {
	setTimeout(function() {
		$('#collapse-button').removeClass('no-opacity');
	}, 1000);
	setTimeout(function() {
		$('.navbar-nav li:nth-child(1)').removeClass('no-opacity');
	}, 1000);
	setTimeout(function() {
		$('.navbar-nav li:nth-child(2)').removeClass('no-opacity');
	}, 1400);
	setTimeout(function() {
		$('.navbar-nav li:nth-child(3)').removeClass('no-opacity');
	}, 1800);
	setTimeout(function() {
		$('.navbar-nav li:nth-child(4)').removeClass('no-opacity');
	}, 2200);
	setTimeout(function() {
		$('.navbar-nav li:nth-child(5)').removeClass('no-opacity');
	}, 2600);
	setTimeout(function() {
		$('#logo').removeClass('no-opacity');
	}, 3000);
	setTimeout(function() {
		$('#landing-img').css('filter','brightness(5%)');
	}, 4000);
	setTimeout(function() {
		$('#intro-part-1 h1').removeClass('no-opacity');
		$('#intro-part-1 h1').addClass('short-type-animation');
	}, 6000);
	setTimeout(function() {
		$("#intro-part-1 h1").css('border',"none");		
		$("#intro-part-1 h1").css('animation',"default");		
		$('#intro-part-2 h1').removeClass('no-opacity');
		$('#intro-part-2 h1').addClass('medium-type-animation');
	}, 8000);	
	setTimeout(function() {
		$("#intro-part-2 h1").css('border',"none");		
		$("#intro-part-2 h1").css('animation',"default");	
		$('#intro-part-3 h1').removeClass('no-opacity');
		$('#intro-part-3 h1').addClass('medium-type-animation');
	}, 11000);		
	setTimeout(function() {
		$("#button-container").removeClass("no-opacity");
	}, 14000)
}