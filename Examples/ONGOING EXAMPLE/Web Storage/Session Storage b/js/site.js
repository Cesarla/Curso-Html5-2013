$().ready(function() {

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
		alert("add");
	}

	function remProducto(producto) {
		alert("ren");
	}

	function updateProducto(producto) {
		alert("update");
	}

});