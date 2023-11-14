/*-----------------------------------------------------------------------------------*/
/* 		Mian Js Start 
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($) {
"use strict"
/*-----------------------------------------------------------------------------------*/
/*		STICKY NAVIGATION
/*-----------------------------------------------------------------------------------*/
$(".sticky").sticky({topSpacing:0});
/*-----------------------------------------------------------------------------------*/
/* 	LOADER
/*-----------------------------------------------------------------------------------*/
$("#loader").delay(500).fadeOut("slow");
/*-----------------------------------------------------------------------------------*/
/*  FULL SCREEN
/*-----------------------------------------------------------------------------------*/
$('.full-screen').superslides({});
/*-----------------------------------------------------------------------------------*/
/* 	Counter Timer
/*-----------------------------------------------------------------------------------*/
$('.countdown').downCount({
     date: '12/12/2018 12:00:00' // M/D/Y
});
$('.countdown-all').downCount({
     date: '12/12/2020 12:00:00' // M/D/Y
});
/*-----------------------------------------------------------------------------------*/
/* 	COUNTER
/*-----------------------------------------------------------------------------------*/
$('.counter').counterUp({
    delay: 50,
    time: 2000
});
/*-----------------------------------------------------------------------------------*/
/* 	MagnificPopup
/*-----------------------------------------------------------------------------------*/
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
});

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
  })

});




