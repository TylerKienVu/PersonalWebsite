$(document).ready(function(){
	setTimeout(function() {
		$('.fly-in-text li:nth-child(1)').removeClass('transition-hidden');
	}, 500);

	setTimeout(function() {
		$('.fly-in-text li:nth-child(2)').removeClass('transition-hidden');
	}, 2000);

	setTimeout(function() {
		$('.fly-in-text li:nth-child(3)').removeClass('transition-hidden');
	}, 3500);

	setTimeout(function() {
		$('#logo').removeClass('img-hidden');
	}, 4500);

	setTimeout(function() {
		$('#landing-img').removeClass('img-hidden');
	}, 4500);

    $('.lazy').Lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
    });
    //source for smooth scrolling: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

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
});