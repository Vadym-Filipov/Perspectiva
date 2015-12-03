(function () {

    var clickme = document.getElementById('products');
    var flagmenu = false;
    var landdown = document.getElementsByClassName('land');
    clickme.onclick = function () {

        if (flagmenu == false) {
            clickme.classList.add('is-active');
            flagmenu = true;
            //return;
        }
        else {
            clickme.classList.remove('is-active');
            flagmenu = false;
           // return;
        }


    };

    //  --------------------------------------------

    for (var i = 0; i < landdown.length; i++) {
        landdown[i].onclick = function () {
            alert('12');

        }
    }
})();

(function () {   } )();



