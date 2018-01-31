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
	// $(".skill").click(function(event) {
	// 	//unhide other skill if hidden
	// 	$(".skill[hidden]").removeAttr("hidden");
	// 	//grab skill div
	// 	var skill = $(this).outerHTML();
	// 	$(this).attr("hidden","");

	// 	//place skill in description div
	// 	$("#skill-description").html(skill);
	// 	$("#skill-description > .skill").css({height:"10em",width:"10em"});
	// 	var detailString = $("#skill-description > .skill > .details").html();
	// 	var pElement = "<p class='details'>" + detailString + "</p>"
	// 	$("#skill-description").append(pElement);
	// 	$('[data-spy="scroll"]').each(function () {
	// 	  var $spy = $(this).scrollspy('refresh')
	// 	})		

	// });
	// $(".work").click(function(event) {
	// 	//unhide other work if hidden
	// 	$(".work[hidden]").removeAttr("hidden");
	// 	//grab work div
	// 	var work = $(this).outerHTML();
	// 	$(this).attr("hidden","");

	// 	//place work in description div
	// 	$("#work-description").html(work);
	// 	$("#work-description > .work > .work-img-container").css({height:"10em",width:"10em"});
	// 	$("#work-description > .work > .details").removeAttr("hidden");
	// 	$("#work-description > .work > .date").removeAttr("hidden");		
	// 	$("#work-description > .work > .work-title").removeAttr("hidden");		
	// 	$('[data-spy="scroll"]').each(function () {
	// 	  var $spy = $(this).scrollspy('refresh')
	// 	})		

	// });	
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 500) {
	        $("nav").addClass("bg-custom");
	        $("#collapse-button").removeClass("mt-3");
	        $("#collapse-button").removeClass("mr-3");
	    } else {
	        $("nav").removeClass("bg-custom");
	       	$("#collapse-button").addClass("mt-3");
	        $("#collapse-button").addClass("mr-3");
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
	}, 500);
	setTimeout(function() {
		$('.navbar-nav li:nth-child(1)').removeClass('no-opacity');
	}, 600);
	setTimeout(function() {
		$('.navbar-nav li:nth-child(2)').removeClass('no-opacity');
	}, 700);
	setTimeout(function() {
		$('.navbar-nav li:nth-child(3)').removeClass('no-opacity');
	}, 800);
	setTimeout(function() {
		$('.navbar-nav li:nth-child(4)').removeClass('no-opacity');
	}, 900);
	setTimeout(function() {
		$('.navbar-nav li:nth-child(5)').removeClass('no-opacity');
	}, 1000);
	setTimeout(function() {
		$('#logo').removeClass('no-opacity');
	}, 500);
	setTimeout(function() {
		$('#landing-img').css('filter','brightness(20%)');
	}, 1000);
	// setTimeout(function() {
	// 	$('#intro-part-1 h1').removeClass('no-opacity');
	// 	$('#intro-part-1 h1').addClass('short-type-animation');
	// }, 1200);
	// setTimeout(function() {
	// 	$("#intro-part-1 h1").css('border',"none");		
	// 	$("#intro-part-1 h1").css('animation',"default");		
	// 	$('#intro-part-2 h1').removeClass('no-opacity');
	// 	$('#intro-part-2 h1').addClass('medium-type-animation');
	// }, 2000);	
	// setTimeout(function() {
	// 	$("#intro-part-2 h1").css('border',"none");		
	// 	$("#intro-part-2 h1").css('animation',"default");	
	// 	$('#intro-part-3 h1').removeClass('no-opacity');
	// 	$('#intro-part-3 h1').addClass('medium-type-animation');
	// }, 3500);		
	// setTimeout(function() {
	// 	$('#intro-part-3 h1').addClass('delete-animation');		
	// }, 5000);	
	// setTimeout(function() {
	// 	$('#intro-part-3 h1').text("I")
	// }, 6000);	
	// setTimeout(function() {
	// 	$('#intro-part-3 h1').text("I love to game.")
	// 	$('#intro-part-3 h1').addClass('retype-animation');		
	// 	$('#intro-part-3 h1').removeClass('delete-animation');				
	// }, 7000);	
	// setTimeout(function() {
	// 	$('#intro-part-3 h1').addClass('delete-animation');		
	// }, 9000);	
	// setTimeout(function() {
	// 	$('#intro-part-3 h1').text("I")
	// 	// $('#intro-part-3 h1').removeClass('delete-animation');						
	// }, 10000);	
	// setTimeout(function() {
	// 	$('#intro-part-3 h1').text("I love to dance.")
	// 	$('#intro-part-3 h1').addClass('retype-animation');		
	// }, 11000);		
	// setTimeout(function() {
	// 	$('#intro-part-3 h1').text("I love to code. Hire me pls.")
	// 	$('#intro-part-3 h1').addClass('type-ending-animation');		
	// }, 21000);	
	// setTimeout(function() {
	// 	$("#button-container").removeClass("no-opacity");
	// }, 4000)
}