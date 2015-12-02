(function () {
    var images = document.getElementsByClassName("position_model");
    var knopkabynow = document.getElementsByClassName('button_bynow')[0];
    var origX, origY;
    for (var i = 1; i < images.length-1; i++) {
        images[i].onmouseover = function () {

            origX = event.target.offsetLeft;
            origY = event.target.offsetTop;
            knopkabynow.style.display = 'block';
            knopkabynow.style.left = origX + 50 + 'px';
            knopkabynow.style.top = origY + 75 +'px';

        }


        images[i].onmouseout = function () {
            this.style.backgroundColor = "yellow";
            knopkabynow.style.display = 'none';
        }
    }
    knopkabynow.onmouseover = function () {
        knopkabynow.style.display = 'block';

    }
})();

(function () {   } )()