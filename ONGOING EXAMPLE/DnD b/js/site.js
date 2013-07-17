$().ready(function() {
	
	var monster = document.getElementById("monster");
	
	var manzana = document.getElementById("manzana").src;
	var pera	= document.getElementById("pera").src;
	var platano = document.getElementById("platano").src;
	var galleta = document.getElementById("galleta").src;
	
	monster.addEventListener("dragover", cancel);
	
	monster.addEventListener("dragenter", cancel);
	
	
	/**
	 * Añade resaltado al elemento de destino.
	 * @param {Object} event
	 */
	function addLight(event) {

	}
	
	/**
	 * Elimina el resaltado al elemento de destino.
	 * @param {Object} event
	 */
	function removeLight(event) {

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