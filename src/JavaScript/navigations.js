$(document).ready(function () {
	$("#navIcon").click(function () {
		$(this).toggleClass("navMenuOpen");
		$("#Menu").toggleClass("toggleMenu");
	});

	let oldPos = 0;
	document.addEventListener("scroll", function (event) {
		if (typeof landed == "undefined" || landed) {
			let helperPos = window.scrollY;
			if (helperPos - oldPos > 0) {
				$("header").toggleClass("headerUp", true);
				$("#navIcon").toggleClass("navMenuOpen", false);
				$("#Menu").toggleClass("toggleMenu", false);
			} else if (helperPos - oldPos < 0) {
				$("header").toggleClass("headerUp", false);
				$("#navIcon").toggleClass("navMenuOpen", false);
				$("#Menu").toggleClass("toggleMenu", false);
			}
			oldPos = helperPos;
		}
	}, true);
});