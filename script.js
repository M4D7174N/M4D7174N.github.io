$( ".inner-switch" ).on("click", function() {
if( $( "body" ).hasClass( "dark" )) {
    $( "body" ).removeClass( "dark" );
  } else {
    $( "body" ).addClass( "dark" );
  }
});

$( ".inner-ham" ).on("click", function() {
  if( $( ".CV" ).hasClass( "hide" )) {
    $( ".CV" ).removeClass( "hide" );
  } else {
    $( ".CV" ).addClass( "hide" );
  }
});