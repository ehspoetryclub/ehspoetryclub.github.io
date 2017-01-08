var load = function(){
	$("#pageload").delay(300).fadeIn(500, "swing");
}; // loads page

var more = function() {
	$("#more").click(function (){
		$("#moreinfo").slideToggle(450, "swing");
	});
};

$(document).ready(load);
$(document).ready(more);
