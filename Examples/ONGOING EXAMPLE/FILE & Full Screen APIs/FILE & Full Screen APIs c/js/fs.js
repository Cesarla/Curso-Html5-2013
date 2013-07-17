$().ready(function() {
	document.cancelFullScreen = document.webkitExitFullscreen || document.mozCancelFullScreen || document.exitFullscreen;

	var elem = document.querySelector("#wrapper-fs");

	function toggleFS(el) {
		if (el.webkitEnterFullScreen) {
			el.webkitEnterFullScreen();
		} else {
			if (el.mozRequestFullScreen) {
				el.mozRequestFullScreen();
			} else {
				el.requestFullscreen();
			}
		}

		el.ondblclick = exitFullscreen;
	}

	function onFullScreenEnter() {
		console.log("Entered fullscreen!");
		elem.onwebkitfullscreenchange = onFullScreenExit;
		elem.onmozfullscreenchange = onFullScreenExit;
	};

	function onFullScreenExit() {
		console.log("Exited fullscreen!");
	};

	function enterFullscreen() {
		console.log("enterFullscreen()");
		elem.onwebkitfullscreenchange = onFullScreenEnter;
		elem.onmozfullscreenchange = onFullScreenEnter;
		elem.onfullscreenchange = onFullScreenEnter;
		if (elem.webkitRequestFullscreen) {
			elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		} else {
			if (elem.mozRequestFullScreen) {
				elem.mozRequestFullScreen();
			} else {
				elem.requestFullscreen();
			}
		}
		$("#fs").unbind('click').click(function() {
			exitFullscreen();
		});
	}

	function exitFullscreen() {
		console.log("exitFullscreen()");
		document.cancelFullScreen();
		$("#fs").unbind('click').click(function() {
			enterFullscreen();
		});
	}


	$("#fs").click(function() {
		enterFullscreen();
	});
}); 