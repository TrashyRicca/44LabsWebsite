$(window).on("load", function() {
    const team = [["CRIZZY", "founder and creative director"], ["SILVERFOX", "coo"], ["DEVTONIC", "head developer"], ["RICCA", "developer and webdesigner"]];
    let index = 1;

    let helper = Math.max($(".rect1>.rectText").outerHeight(), $(".rect2>.rectText").outerHeight());
    $(".rect1>.rectText").height(helper + "px");
    $(".rect2>.rectText").height(helper + "px");
    if (!mobile.matches) {
        $(".rect1").height(helper * 1.2 + "px");
        $(".rect2").height(helper * 1.2 + "px");
    } else {
        $("#switch").height(helper * 2 + "px");
    }

    $(".staff").mouseenter(function () {
        const helper = $(this).attr('id');
        $(".staff").each(function () {
            if (helper == $(this).attr('id')) {
                if (helper != index) {
                    index = helper;
                    $(this).toggleClass("scale11", true);
                    $("#team>p").animate({
                        opacity: 0
                    }, 200, function () {
                        $("#team>p>.name").text(team[helper - 1][0]);
                        $("#team>p>.descr").text(team[helper - 1][1]);
                        $("#team>p").animate({
                            opacity: 1
                        }, 200, function () {
                            // Animation complete.
                        });
                    });
                }
            } else {
                $(this).toggleClass("scale11", false);
            }
        });
    });
});