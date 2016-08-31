$(document).ready(function(){
	function addSliding(a,b){
		$(a).mouseenter(function(){
			$('div[id^="menu"]').slideUp(200);
			$(b).slideDown(200);
		});
		$(b).mouseleave(function(){
			$(b).slideUp(200);
		});
	}

	addSliding("#header-ret", "#menu-ret");
	addSliding("#header-who", "#menu-who");
	addSliding("#header-hos", "#menu-hos");
	addSliding("#header-sof", "#menu-sof");
	addSliding("#header-pos", "#menu-pos");
	addSliding("#header-reg", "#menu-reg");
	addSliding("#header-sec", "#menu-sec");

	$('a[href*="#"]').click(function(event){     
	    event.preventDefault();
	    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
	
	$('html,body').animate({scrollTop: $(window.location.hash).offset().top});
});