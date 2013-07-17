$().ready(function() {

	var editor = document.getElementById('editor');

	$("#download").click(function() {
		var blob = new Blob([$(editor).text()], {
			type : "text"
		});
		window.open(window.URL.createObjectURL(blob), "Chromeless - Editor: New Saved File");
	});

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

	editor.addEventListener('dragover', cancel);

	editor.addEventListener('dragenter', cancel);

	editor.addEventListener('drop', function(event) {

		if (event.preventDefault) {
			event.preventDefault();
		}

		files = event.dataTransfer.files;

		for ( i = 0; i < files.length; i++) {
			cargar(files[i]);
		}

		return false;
	});

	function cancel(event) {
		if (event.preventDefault) {
			event.preventDefault();
		}
		return false;
	}

	function cargar(file) {
		if (file.type.indexOf("text") == 0) {
			var reader = new FileReader();
			reader.onload = function(e) {
				añadirHtml(e.target.result.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
			}
			reader.readAsText(file);
		}
	}

	function añadirHtml(html) {
		$('#editor').html(function(index, val) {
			return $('#result').html() + html;
		});
	}

}); 