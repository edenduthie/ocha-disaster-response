$('.pop').popover({
	placement: 'bottom',
	html: true
});

$('.back-to-top').click(function(){
	$('body').scrollTop(0);
});

$(document).ready(function(){
    showHideControl();
    $(window).scroll(function(){
        showHideControl();
    });        
});

function showHideControl() {
	var p = $(document).scrollTop();
	if( p > 200 ) {
		$('.back-to-top').show();
	}
	else {
		$('.back-to-top').hide();
	}
}