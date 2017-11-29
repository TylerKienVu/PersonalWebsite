$(document).ready(function(){
	window.addEventListener("load", startAnimation);
    $('.lazy').Lazy();	    
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
	$(".skill").click(function(event) {
		//unhide other skill if hidden
		$(".skill[hidden]").removeAttr("hidden");
		//grab skill div
		var skill = $(this).outerHTML();
		$(this).attr("hidden","");

		//place skill in description div
		$("#skill-description").html(skill);
		$("#skill-description > .skill").css({height:"10em",width:"10em"});
		var detailString = $("#skill-description > .skill > .details").html();
		var pElement = "<p class='details'>" + detailString + "</p>"
		$("#skill-description").append(pElement);

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
	    if (isScrolledIntoView("#about-me-header")){
	    	$("#about-me-header").removeClass("no-opacity");
	    }
	    else {
	    	$("#about-me-header").addClass("no-opacity");
	    }
	    if (isScrolledIntoView("#profile-picture")){
	    	$("#profile-picture").removeClass("no-opacity");
	    }	 
	    if (isScrolledIntoView("#who")){
	    	$("#who").removeClass("no-opacity");
	    }
	    else {
	    	$("#who").addClass("no-opacity");
	    }
	    if (isScrolledIntoView("#passion")){
	    	$("#passion").removeClass("no-opacity");
	    }
	    else {
	    	$("#passion").addClass("no-opacity");
	    }
	    if (isScrolledIntoView("#education")){
	    	$("#education").removeClass("no-opacity");
	    }	
	    else {
	    	$("#education").addClass("no-opacity");
	    }
	    if (isScrolledIntoView("#skills")){
	    	$("#skills").removeClass("no-opacity");
	    }	    
	    else {
	    	$("#skills").addClass("no-opacity");
	    }
	    if (isScrolledIntoView("#projects-section-header")){
	    	$("#projects-section-header").removeClass("no-opacity");
	    }		 
	    else {
	    	$("#projects-section-header").addClass("no-opacity");
	    }
	    if (isScrolledIntoView("#github-border")){
	    	$("#github-border").removeClass("no-opacity");
	    }		
	    else {
	    	$("#github-border").addClass("no-opacity");
	    }
	    if (isScrolledIntoView("#experience-section-header")){
	    	$("#experience-section-header").removeClass("no-opacity");
	    }		               	    	 
	    else {
	    	$("#experience-section-header").addClass("no-opacity");
	    }
	    if (isScrolledIntoView("#ttd-border")){
	    	$("#ttd-border").removeClass("no-opacity");
	    }	
	    else {
	    	$("#ttd-border").addClass("no-opacity");
	    }
	    if (isScrolledIntoView("#resume-statement")){
	    	$("#resume-statement").removeClass("no-opacity");
	    }	  
	   	else {
	   		$("#resume-statement").addClass("no-opacity");
	   	}
	    if (isScrolledIntoView("#email-statement")){
	    	$("#email-statement").removeClass("no-opacity");
	    }	      	          
	    else {
	    	$("#email-statement").addClass("no-opacity");
	    }
	});
});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

jQuery.fn.outerHTML = function() {
   return (this[0]) ? this[0].outerHTML : '';  
};

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
		$('#intro-part-3 h1').addClass('delete-animation');		
	}, 14000);	
	setTimeout(function() {
		$('#intro-part-3 h1').text("I")
	}, 15000);	
	setTimeout(function() {
		$('#intro-part-3 h1').text("I love to code.")
		$('#intro-part-3 h1').addClass('retype-animation');		
	}, 16000);		
	setTimeout(function() {
		$('#intro-part-3 h1').text("I love to code. Hire me pls.")
		$('#intro-part-3 h1').addClass('type-ending-animation');		
	}, 21000);	
	setTimeout(function() {
		$("#button-container").removeClass("no-opacity");
	}, 19000)
}