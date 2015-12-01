//window.onload = function () {

    var clickme = document.getElementById('products');
    var flagmenu = false;
    var landdown = document.getElementsByClassName('land');
    clickme.onclick = function () {

        if (flagmenu == !true) {
            clickme.classList.add('is-active');
            flagmenu = true;
            return;
        }
        else {
            clickme.classList.remove('is-active');
            flagmenu = false;
            return;
        }


    }

    //  --------------------------------------------

    for (var i = 0; i < landdown.length; i++) {
        landdown[i].onklick = function () {
            alert('12');

        }
    }
//}



