$(document).ready(function(){

	'use strict';

	
	/* PLAY */
	$('.play span').click(function(e){
		e.preventDefault();

		$('.play').addClass('hidden').css('height',0);

		return false;
	});


	/* TURBINAS */
	var rotate = 1;
	setInterval(function(){
		if (rotate > 360) {
			rotate = 1;
		} else {
			rotate += 1;
		}

		$('.helice').css('transform','rotate(' + rotate + 'deg)');
	},8);


	/* NUVENS */
	$('.nuvem').each(function(){
		var $self = $(this),
			left = parseInt($(this).css('left')),
			speed = $self.attr('data-speed');

		setInterval(function(){
			if (left >= 1020) {
				left = -150;
			} else {
				left += 1;
			}

			$self.css('left', left + 'px');
		},speed);
	});


	/* VENTO */
	$('.wind').each(function(){
		var $self = $(this),
			left = parseInt($(this).css('left'));

		setInterval(function(){
			if (left >= 1020) {
				left = -150;
			} else {
				left += 1;
			}

			$self.css('left', left + 'px');
		},80);
	});


	/* MENU */
	$('.menu li').click(function() {
		var cenario = $(this).attr('class').split(' ')[0];

		$('.voce-sabia').fadeOut();
		$('#cenario').removeClass();
		$('#cenario').addClass(cenario);
		$(this).nextAll().removeClass('active');
		$(this).prevAll().addClass('active');
		$(this).addClass('active');
		$('.features').fadeOut();
		$('.info>div').fadeOut();
		$('div[data-menu=' + cenario + ']').fadeIn();
		$('.bar[data-menu=' + cenario + ']').nextAll().fadeOut();
		$('.bar[data-menu=' + cenario + ']').prevAll().fadeIn();

		if (cenario == 'transformador') {
			$('.poste-menor').attr('data-menu',cenario);
			$('.poste-maior').attr('data-menu',cenario);
		} else {
			$('.poste-menor').attr('data-menu','');
			$('.poste-maior').attr('data-menu','');
		}
	});


	/* VOCE SABIA */
	$('.voce-sabia').click(function() {
		$('.info .active').fadeOut();
		$('.info .active').removeClass('active');
		$('.info .info-voce-sabia').addClass('active');
		$('.info .info-voce-sabia').fadeIn();
	});
});