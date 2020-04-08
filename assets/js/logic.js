$(document).ready(function () {

    const navToggle = $("#navToggle");
    let isDisplay = false;

    function toggleDisplay() {
        if (isDisplay == false) {
            isDisplay = true;
        } else {
            isDisplay = false;
        }
    }

    // Listen to a click event on the the nav when on small screen
    navToggle.on("click", ".navSmallLink", function() {
        // Display the menu
        navToggle.css("display", "none");
        toggleDisplay();
    })

    // Listen to a click event on the menu icon when on small screen
    $("#navMenuIcon").on("click", function() {
        if (isDisplay == false) {
            navToggle.css("display", "block");
        } else {
            navToggle.css("display", "none");
        }
        toggleDisplay();
    })

    // Listen to a resize event on the window
    $(window).on("resize", function() {
        let windowWidth = $(window).width();
        console.log(windowWidth);
        if (windowWidth > 639) {
            navToggle.css("display", "none");
        }
    })


})