$(document).ready(function(){
	//For opening the video overlays
	$('.launch-modal').on('click', function(e){
		e.preventDefault();
		var $modalElement = $('#' + $(this).data('modal-id'));
		$modalElement.modal();
		var $iframe = $modalElement.find('iframe')[0];
		$modalElement.on('hide.bs.modal', function (e) {
			$iframe.src = $iframe.src;
		});
	});

	//for smooooooth scrolling
	$(".navbar a, footer a[href='#the-top']").on('click', function(event) {
	  	if (this.hash !== "") {
	    	event.preventDefault();
	    	var hash = this.hash;
	    	$('html, body').animate({
	      		scrollTop: $(hash).offset().top
	    	}, 900, function(){
	     		window.location.hash = hash;
	      	});
		}
  	});

	//Fade-ins!
  	$(window).scroll(function() {
  		$(".slideanim").each(function(){
    		var pos = $(this).offset().top;

    		var winTop = $(window).scrollTop();
    		if (pos < winTop + 600) {
      			$(this).addClass("slide");
    		}
  		});
	});
});