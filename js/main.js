$(document).ready(function () {
    // sticky menu
    $(".js_service_section").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky")
        } else {
            $("nav").removeClass("sticky")
        }
    });

    // active menu
    $(".main_nav li").click(function () {
        $(".main_nav li").removeClass("active")
        $(this).addClass("active")
    })

    // active menu
    $(".mobile_nav li").click(function () {
        $(".mobile_nav li").removeClass("active")
        $(this).addClass("active")
    })

    //scroll-smooth
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 100, function () {
                window.location.hash = hash;
            })
        }
    })

    // mixitup (porthfolio_section)
    var mixer = mixitup(".mixitup")
})