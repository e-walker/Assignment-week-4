$( document ).ready(function() {
    console.log( "ready" );


	$( 'a' ).click(function( event ) {
		event.preventDefault();
	});

	$( '.readmore').click(function() {
		$('#show-this-on-click').slideDown("slow");
		$('.readmore').hide();
		$('.readless').show();
  	});


  	$( '.readless').click(function(){
  		$('#show-this-on-click').slideUp("slow");
  		$('.readless').hide();
		$('.readmore').show("slow");

  	});

});

