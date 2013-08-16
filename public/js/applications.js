$(document).ready(function(){
	navi();
});

function navi() {
	$('.toggle-menu a').click(function(){
		$(this).parents('.toggle-menu').next('ul').toggleClass('show');
			return false;
	});
}
