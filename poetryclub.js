var load = function(){
	$('#pageload').delay(300).fadeIn(800, "swing");
} // loads page

var slider = function () {
	$('.arrow-left').click(function(){
		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev();
		
		if (prevSlide.length === 0) {
			prevSlide = $('.slide').last();
		} // if there is no prev slide, then show last slide
		
		currentSlide.hide().removeClass('active-slide');
		prevSlide.show().addClass('active-slide');
	});
	
	$('.arrow-right').click(function() {
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();
		
		if (nextSlide.length === 0) {
			nextSlide = $('.slide').first();
		} // if there is no next slide, then show first slide
		
		currentSlide.hide().removeClass('active-slide');
		nextSlide.show().addClass('active-slide');
	});
} // left arrow and right arrow slider controls

var panels = function(){
	$('#panel').click(function(){
		$('#modal').delay(400).fadeIn(500, "swing");
		$('#modalcontainer').show();	
		
		$('#panel').addClass('activePanel');
	});
	
	$('#panel2').click(function(){
		$('#modal2').delay(400).fadeIn(500, "swing");
		$('#modalcontainer2').show();
		
		$('#panel2').addClass('activePanel');
		});
	
	$('#panel3').click(function(){
		$('#modal3').delay(400).fadeIn(500, "swing");
		$('#modalcontainer3').show();
		
		$('#panel3').addClass('activePanel');
		});
		
	$('.close').click(function(){
		$('.modal').delay(300).fadeOut(500, "swing");
		
		$('#panel').removeClass('activePanel');
		$('#panel2').removeClass('activePanel');
		$('#panel3').removeClass('activePanel');
		});	
} // click panel, modal transitions 


/* Shows in responsive */ 

var about = function() {
	$("#about").clone().appendTo('#about2');
}

var contact = function(){
	$('#contactmain').clone().appendTo('#contact2');
	$('#contactmain tr').wrap("<p>");
	$('#contact2 td').wrap("<span>").css("display","inline");
	$('#contact2 span:nth-child(odd)').css({"font-weight":"bold","margin-right":"25%"});
	$('#contact2 td, #contact2 tr, #contact2 table').contents().unwrap();	
} // only clones president's name and replaces table with inline

var current = function (){
	switch (new Date().getMonth()) {
		case 7:
		case 8:
		case 9:
			$('.month1').clone().appendTo('#calendar2');
			break;
		case 10:
		case 11:
		case 0:
			$('.month2').clone().appendTo('#calendar2');
			break;
		case 1:
		case 2:
		case 3:
			$('.month3').clone().appendTo('#calendar2');
			break;
		case 4:
			$('.month4').clone().appendTo('#calendar2');
			break;
		default:
			break;
	}
	
	$('#calendar2 td, #calendar2 tr, #calendar2 table').contents().unwrap();
} // finds today's month and clones three surrounding months to a section only available on mobile

$(document).ready(load);
$(document).ready(about);
$(document).ready(contact);
$(document).ready(current);
$(document).ready(slider);
$(document).ready(panels);
