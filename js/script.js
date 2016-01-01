$(document).ready(function(){

  //Set Options
  var speed = 500;  			//fade speed
  var autoSwitch = true; 	 	// suto slider option
  var autoSwitchSpeed = 4000; 	//Auto slider speed
  
  //Add initial active class

  $( '.slide' ).first().addClass( 'active' );

  //Hide all slides

  $( '.slide' ).hide();

  //show the first slide

  $( '.active' ).show();

		//Next handler
  $( '#next' ).on( 'click', nextSlide );

		// Prev Handler
  $( '#prev' ).on( 'click', prevSlide );

		if( autoSwitch == true ){
			setInterval( nextSlide, autoSwitchSpeed );


}

  //this function will switch to the next slide
  	function nextSlide(){
  		$( '.active' ).removeClass( 'active' ).addClass( 'oldActive' );
  		  	if( $( '.oldActive' ).is( ':last-child' ) ){
  				$( '.slide' ).first().addClass( 'active' );

  			}else{
  				$( '.oldActive' ).next().addClass( 'active' );
  			}
  			$( '.oldActive' ).removeClass( 'oldActive' );
  			$( '.slide' ).fadeOut( speed );
  			$( '.active' ).fadeIn( speed );
  }


  function prevSlide(){
  		$( '.active' ).removeClass( 'active' ).addClass( 'oldActive' );
  		  	if( $( '.oldActive' ).is( ':first-child' ) ){
  				$( '.slide' ).last().addClass( 'active' );

  			}else{
  				$( '.oldActive' ).prev().addClass( 'active' );
  			}
  			$( '.oldActive' ).removeClass( 'oldActive' );
  			$( '.slide' ).fadeOut( speed );
  			$( '.active' ).fadeIn( speed );
  }


    //Registration
    var $noRegButton = $( '#no-reg' );
    var $exit = $( '#exit' ); 



    $noRegButton.on( 'click', function(){
      $( '.backdrop' ).css( { "display": "block" } );

       $( '.registration-form-container' ).css( { "display": "block" } );


    });

      



    $exit.on( 'click', function(){
      $( '.backdrop' ).css( { "display": "none" } );

      
       $( '.registration-form-container' ).css( { "display": "none" } );

    } );




    //Filter
    $( '.second-nav a' ).on( 'click', function(){
      $( '.second-nav li.current' ).removeClass( 'current' );
      $( this ).parent().addClass( 'current' );

      var $category = $( this ).text().toLowerCase().replace( ' ', '-' );
      if( $category == 'all' ){
        $( 'ul#gallery li:hidden' ).fadeIn( 'slow' ).removeClass( 'hidden' );


      }else{
        $( 'ul#gallery li' ).each( function(){
         
          if( !$( this ).hasClass( $category ) ){
            $( this ).hide().addClass( 'hidden' );
         
          }else{
            $( this ).fadeIn( 'slow' ).removeClass( 'hidden' );
          }
       
        } );
      }

      return false;


    } );
    




});
