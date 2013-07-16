$().ready(function() {

	var box = document.getElementById('editor');
	
	box.addEventListener('dragover', cancel);
	
	box.addEventListener('dragenter', cancel);
	
	box.addEventListener('drop', function(event) {
	
		if (event.preventDefault) {
			event.preventDefault();
		}
		
		files = event.dataTransfer.files;
		
		for(i = 0; i < files.length; i++){
			cargarImagen(files[i]);
		}
		
		return false;
	});
	
	function cancel(event) {
		if (event.preventDefault) {
			event.preventDefault();
		}
		return false;
	}
	
	function cargarImagen(file){
		// display text
		if (file.type.indexOf("text") == 0) {
			var reader = new FileReader();
			reader.onload = function(e) {
				añadirHtml(
					e.target.result.replace(/</g, "&lt;").replace(/>/g, "&gt;")
				);
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