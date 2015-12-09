(function () {
    jQuery(document).ready(function() {
        jQuery("a.menu-link").click(function () {
            elementClick = jQuery(this).attr("href")
            destination = jQuery('a.scrolltome').offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
            return false;
        });
    });
})();
(function () {   } )();
