//window.onload = function () {

    var clickme = document.getElementById('products');
    var flagmenu = false;
    clickme.onclick = function () {

        if ( flagmenu == !true ){
            clickme.classList.add('is-active');
            flagmenu = true;
            return;
        }
        else {
            clickme.classList.remove('is-active');
            flagmenu = false;
            return;
        }


  //  }

    //--------------------------------------------
    ///var landdown = document.getElementsByClassName('land');
    //for (var i = 0; i<landdown.length; i++) {
    ///landdown[0].onklick = function () {
    //    this.style.background = 'red';

   //     }
   // }


}
