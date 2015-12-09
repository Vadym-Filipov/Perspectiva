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
    $(document).mouseup(function (e) {
        var container = $("main-menu-li");
        if (container.has(e.target).length == 0 && e.target.id != 'products'){
            clickme.classList.remove('is-active');
            flagmenu = false;
        }
    });

})();

(function () {   } )();



