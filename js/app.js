// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

/***************************************
			JQUERY STUFF
***************************************/
 
// Get #content height
var content = $("#content").height();


// Add #content's height to sidebar + 3em
$('#sidebar').css( "height", content + 48 );