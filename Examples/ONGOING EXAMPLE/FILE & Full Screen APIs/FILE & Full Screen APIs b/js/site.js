$().ready(function() {

	var editor = document.getElementById('editor');

	$("#trash").click(function() {
		$("#editor").empty();
	});

	$("#left").click(function() {
		$("#editor").css("text-align", "left");
	});

	$("#center").click(function() {
		$("#editor").css("text-align", "center");
	});

	$("#right").click(function() {
		$("#editor").css("text-align", "right");
	});

	$("#justify").click(function() {
		$("#editor").css("text-align", "justify");
	});

	function añadirHtml(html) {
		$('#editor').html(function(index, val) {
			return $('#result').html() + html;
		});
	}

}); 