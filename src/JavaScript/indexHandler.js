$(document).ready(function () {
    const team = [["CRIZZY", "founder and creative director"], ["SILVERFOX", "coo"], ["DEVTONIC", "head developer"], ["RICCA", "developer and webdesigner"]]
    let index = 1;
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

    $("#collection1").hover(function () {
        $("#collection1").stop();
        $("#collection1").animate({
            width: "73.5%"
        }, 300, "linear");
        $("#collection1>h2").animate({
            opacity: 0
        }, 300, function () {
            $("#collection1>h2").css({"font-size": "2.2em","width": "100%"});
            $("#collection1>h2").text("Our first NFT collection where we combine community, art, designs, branding and utility. The Mous love to vibe, hanging out, drinking and smoking at the NYC subway stations, especially the one on the 44th Street. Recently there has been a golden potion flooding the streets, making those MAD that drink it. The Mad Mous are enhanced and some say they will soon be taking over.");
            $("#collection1>h2").animate({
                opacity: 1
            }, 300, function () {
                // Animation complete.
            });
        });
    }, function (){
        $("#collection1").stop();
        $("#collection1").animate({
            "width": "48.5%"
        }, 300);
        $("#collection1>h2").animate({
            opacity: 0
        }, 200, function () {
            $("#collection1>h2").css({"font-size": "5em","width": "auto"});
            $("#collection1>h2").text("MIDH");
            $("#collection1>h2").animate({
                opacity: 1
            }, 300, function () {
                // Animation complete.
            });
        });
    });

    $("#collection2").hover(function () {
        $("#collection1").stop();
        $("#collection1").animate({
            "width": "23.5%"
        }, 300, "linear");
        $("#collection2>h2").animate({
            opacity: 0
        }, 300, function () {
            $("#collection2>h2").css({"font-size": "2.2em","width": "100%"});
            $("#collection2>h2").text("Our second NFT collection, taking place in the Interdimension. Recently there has been a rift between our reality and the Interdimensional one and some magical beings have been seen watching NYC carefully from the sky, some even claim to have made contact with them.");
            $("#collection2>h2").animate({
                opacity: 1
            }, 300, function () {
                // Animation complete.
            });
        });
    }, function (){
        $("#collection1").stop();
        $("#collection1").animate({
            "width": "48.5%"
        }, 300);
        $("#collection2>h2").animate({
            opacity: 0
        }, 200, function () {
            $("#collection2>h2").css({"font-size": "5em","width": "auto"});
            $("#collection2>h2").text("IM");
            $("#collection2>h2").animate({
                opacity: 1
            }, 300, function () {
                // Animation complete.
            });
        });
    });
});