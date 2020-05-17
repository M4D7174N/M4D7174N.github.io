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

const inpFile = document.getElementsByClassName("getval")[0];
const previewContainer = document.getElementsByClassName("DP")[0];

inpFile.addEventListener("change", function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function() {
      previewContainer.setAttribute("style", "background-image: url(" + this.result + ")");
    });

    reader.readAsDataURL(file);
  }
})