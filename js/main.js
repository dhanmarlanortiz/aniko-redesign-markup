$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	});
	
	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});
	
	//Toggle Menu
	// $('#menu-toggle').on('click', () => {
	// 	$('#menu-toggle').toggleClass('closeMenu');
	// 	$('ul').toggleClass('showMenu');
		
	// 	$('li').on('click', () => {
	// 		$('ul').removeClass('showMenu');
	// 		$('#menu-toggle').removeClass('closeMenu');
	// 	});
	// });

	$('.sidebar-toggle').on('click', () => {
		$('#sidebar').toggleClass('slidein');		
		$('#enquire').removeClass('slidein');		

	});

	$('.enquire-toggle').on('click', () => {
		$('#enquire').toggleClass('slidein');		
		$('#sidebar').removeClass('slidein');		
	});



	$('#accordion button[data-toggle="collapse"]').on('click', function(e){
		$('#gallery .gallery-item').removeClass('active show');
		$('#gallery ' + $(this).attr('data-target').replace("#", ".")).addClass('active show');
	});

	// $( "select" ).selectmenu();	
});

function initMap() {	
	var map_coor = {lat: -28.0310237, lng: 153.4309662};
	var map = new google.maps.Map(document.getElementById('map'), {zoom: 15, center: map_coor});
	var map_marker = new google.maps.Marker({position: map_coor, map: map});

	var location_coor = {lat: -28.0310237, lng: 153.4309662};
	var location = new google.maps.Map(document.getElementById('location'), {zoom: 15, center: location_coor});	
	var location_marker = new google.maps.Marker({position: location_coor, map: location});
}	


