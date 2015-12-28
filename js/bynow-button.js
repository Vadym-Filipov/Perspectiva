(function () {
    var images = document.getElementsByClassName("position_model");

    var origX;
    for (var i = 1; i < images.length-1; i++) {
        images[i].onmouseover = function () {

            origX = event.target.nextElementSibling.nextElementSibling;
            //origY = event.target.y;
            origX.style.display = 'block';
            origX.onmouseover = function () {
                origX.style.display = 'block';
            }

        };

        images[i].onmouseout = function () {
            origX = event.target.nextElementSibling.nextElementSibling;

            origX.style.display = 'none';
        }
    }

})();

(function () {   } )();