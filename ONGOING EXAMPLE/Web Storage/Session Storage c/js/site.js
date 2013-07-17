$().ready(function() {

	if (!sessionStorage) {
		alert(":( Tu navegador no soporta Session Storage API");
	}

	$(".item").each(function(index, value) {

		var dataId = $(this).data("item");
		
		updateProducto(dataId);
		
		$(this).find(".add").click(function(event) {
			addProducto(dataId);
		});
		
		$(this).find(".rem").click(function(event) {
			remProducto(dataId);
		});
	});

	function addProducto(producto) {
		var cantidad = sessionStorage.getItem(producto);
		if (cantidad == null)
			cantidad = 0;
		sessionStorage.setItem(producto, parseInt(cantidad) + 1);
		updateProducto(producto);
	}

	function remProducto(producto) {
		var cantidad = sessionStorage.getItem(producto);
		if (cantidad == null)
			cantidad = 0;
		if (cantidad > 0)
			sessionStorage.setItem(producto, parseInt(cantidad) - 1);
		updateProducto(producto);
	}

	function updateProducto(producto) {
		var cantidad = sessionStorage.getItem(producto);
		if (cantidad == null)
			cantidad = 0;
		$("div.item[data-item='"+producto+"'] .display").val(cantidad);
	}

});