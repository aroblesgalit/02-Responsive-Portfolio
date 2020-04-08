$(document).ready(function () {

    var navToggle = $("#navToggle");
    var isDisplay = false;

    navToggle.on("click", ".navSmallLink", function() {
        navToggle.css("display", "none");
        if (isDisplay == false) {
            isDisplay = true;
        } else {
            isDisplay = false;
        }
    })

    $("#navMenuIcon").on("click", function() {
        if (isDisplay == false) {
            navToggle.css("display", "block");
            isDisplay = true;
        } else {
            navToggle.css("display", "none");
            isDisplay = false;
        }

    })

})