/**
 * Espera hasta la carga completa del DOM
 */
$().ready(function() {

	/**
	 * Calcula la geolocalización
	 */
	function getGeolocation() {
	
	}

	/**
	 * Lanza un alert con los datos de la geolocalización (Latitud, Lóngitud y Presición).
	 * @param {Object} position Objeto contenedor de los resultados de la Geolocalizacion.
	 */
	function handleGeolocation(position) {
		alert('Lat: ' + position.coords.latitude + ' Lon: ' + position.coords.longitude + ' M. Error: ' + position.coords.accuracy + " meters");
	}

	/**
	 * Controla los errores y los muestra en un alert.
	 * @param {Object} error Objeto que contiene información relativa al error.
	 */
	function handleErrors(error) {
		switch(error.code) {
			case error.PERMISSION_DENIED:
				alert("The location acquisition process failed because the document does not have permission to use the Geolocation API.");
				break;
			case error.POSITION_UNAVAILABLE:
				break;
				alert("The position of the device could not be determined");
			case error.TIMEOUT:
				alert("Timeout");
				break;
			default:
				alert("Something bad and unknown - happened");
				break;
		}
	}

}); 