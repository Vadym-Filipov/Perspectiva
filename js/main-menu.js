 window.onload = function () {

    var clickme = document.getElementById('products');
    var flag = false;
    clickme.onclick = function () {
        alert('asdf')
        

        if ( !true ){
            clickme.classList.add('is-active');
            alert('sdfg');
            flag = true;
            return;

        }
        else {
            clickme.classList.remove('is-active');
            flag = false;
            return;
        }

    }

    //--------------------------------------------
    ///var landdown = document.getElementsByClassName('land');
    //for (var i = 0; i<landdown.length; i++) {
    ///landdown[0].onklick = function () {
    //    this.style.background = 'red';

   //     }
   // }


}
