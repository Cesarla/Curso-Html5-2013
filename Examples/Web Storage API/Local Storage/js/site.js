$().ready(function() {

	if (!localStorage) {
		alert(":( Tu navegador no soporta Local Storage API");
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
		var cantidad = localStorage.getItem(producto);
		if (cantidad == null)
			cantidad = 0;
		localStorage.setItem(producto, parseInt(cantidad) + 1);
		updateProducto(producto);
	}

	function remProducto(producto) {
		var cantidad = localStorage.getItem(producto);
		if (cantidad == null)
			cantidad = 0;
		if (cantidad > 0)
			localStorage.setItem(producto, parseInt(cantidad) - 1);
		updateProducto(producto);
	}

	function updateProducto(producto) {
		var cantidad = localStorage.getItem(producto);
		if (cantidad == null)
			cantidad = 0;
		$("div.item[data-item='"+producto+"'] .display").val(cantidad);
	}

});
