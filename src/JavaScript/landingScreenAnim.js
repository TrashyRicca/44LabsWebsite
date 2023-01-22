let landed = false;
$(document).ready(function () {
	if (!(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) {
		var dashOffset = parseInt($("#madSVG>g>path:first-child").css("stroke-dashoffset"), 10);
		var scrollDistance = 1000;
		var scrollDistance2 = 400;
		var svgComplete = false;
		var animationCompleted1 = false;
		var animationCompleted2 = false;
		$(window).scroll(function () {
			if (!svgComplete) {
				var percentageComplete = 1 / scrollDistance * $(window).scrollTop();
				$("#madSVG>g>path:first-child").css("stroke-dashoffset", Math.max(dashOffset - (dashOffset * percentageComplete), 0));
				$("#madSVG>g>path:not(:first-child)").css("stroke-dashoffset", Math.max(dashOffset - (dashOffset * percentageComplete / 6), 0));
				if ($(window).scrollTop() > scrollDistance * 1.1) {
					svgComplete = true;
					window.scrollTo(0, 0);
					$("#landingScreen").css("position", "relative");
					$("#lSHeaderContainer").css("position", "fixed");
					$("header").css("display", "block");
				}
			} else if (!animationCompleted1) {
				var percentageComplete = 1 / scrollDistance2 * $(window).scrollTop();
				// WARNING: 14vw
				var fontSize = Math.max(((4 * $(window).height() / 100) + ((14 * $(window).width() / 100 - (4 * $(window).height() / 100)) * (1 - percentageComplete))), (4 * $(window).height() / 100));
				$("#fadeOutContainer").css("transform", "translate(0,-" + Math.max((92 * (percentageComplete)) - (100 * ($(window).scrollTop() / $(window).height())), 0) + "vh");
				$("#homepage").css("transform", "translate(0,-" + Math.max((92 * (percentageComplete)) - (100 * ($(window).scrollTop() / $(window).height())), 0) + "vh");
				$("#scrollDown").css("opacity", Math.max(0.4 * (1 - percentageComplete * 2), 0));
				$("#scrollDown").toggleClass("scrolldownAnim", false);
				$("#lSHeader>span").css("font-size", (fontSize / $(window).height() * 100) + "vh");
				$("#lSHeader>span").css("top", Math.max(50 - (50 * percentageComplete), 0) + "%");
				$("#lSHeader>span").css("transform", "translate(-50%," + Math.min(-50 - (-50 * percentageComplete), 0) + "%");
				$("#lSHeader").css("filter", "url(#threshold) blur(0px)");
				if (percentageComplete >= 1) {
					animationCompleted1 = true;
					changeCooldownTime(2);
					window.scrollTo(0, $(window).scrollTop() - scrollDistance2);
					$("#fadeOutContainer").css("display", "none");
					$("#homepage").css("transform", "translate(0,0)");
					$("#landingScreen").css("height", "8vh");
					$("#lSHeaderContainer").css("display", "none");
					landed = true;
				}
			} else {
				var percentageComplete = 1 / (document.documentElement.scrollHeight - $(window).height()) * $(window).scrollTop();
				$("#navLine").css("width", Math.min(100 * percentageComplete, 100) + "%");
			}
		});
	}
	typeWriter();
	landed = true;
});