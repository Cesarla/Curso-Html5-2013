$().ready(function() {
	
	var monster = document.getElementById("monster");
	
	var manzana = document.getElementById("manzana").src;
	var pera	= document.getElementById("pera").src;
	var platano = document.getElementById("platano").src;
	var galleta = document.getElementById("galleta").src;
	
	$("img").each(function(index, value) {
		value.addEventListener("dragstart", addLight);
		value.addEventListener("dragend", removeLight);
	});
	
	monster.addEventListener("dragover", cancel);
	
	monster.addEventListener("dragenter", cancel);
	
	monster.addEventListener("drop", function(event) {
		
		if (event.preventDefault) {
			event.preventDefault();
		}
		
		switch(event.dataTransfer.getData("Text")){
			case manzana:
				alert("¡Puagh!");
				break;
			case pera:
				alert("¡Quiero Galletas!");
				break;
			case platano:
				alert("¡Arghs!");
				break;
			case galleta:
				alert("¡Mmm Galletas!");
				break;
		}
		return false;
	});
	
	/**
	 * Añade resaltado al elemento de destino.
	 * @param {Object} event
	 */
	function addLight(event) {
		monster.classList.add("resaltar");
		return false;
	}
	
	/**
	 * Elimina el resaltado al elemento de destino.
	 * @param {Object} event
	 */
	function removeLight(event) {
		monster.classList.remove("resaltar");
		return false;
	}
	
	/**
	 * Elimina el funcionamiento por defecto del evento.
	 * @param {Object} event
	 */
	function cancel(event) {
		if (event.preventDefault) {
			event.preventDefault();
		}
		return false;
	}
});