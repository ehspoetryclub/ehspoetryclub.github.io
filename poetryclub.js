var load = function(){
	$("#pageload").delay(300).fadeTo(500, 1);
}; // loads page

var more = function() {
	$("#more").click(function (){
		$("#moreinfo").slideToggle(500, "swing");
	});
};

$(document).ready(load);
$(document).ready(more);
