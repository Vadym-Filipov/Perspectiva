(function () {
    var clickme = document.getElementById('products');
    var flagmenu = false;
    var landdown = document.getElementsByClassName('land');
    var womenimg = ['../img/prod/foto5.jpg','../img/prod/foto6.jpg','../img/prod/foto7.jpg','../img/prod/foto8.jpg'];
    var womendesc = ['NADIA DRESS','SOFI BLOUSE','SOFI BLOUSE','MIMOSA LACE DRESS'];
    var womenprise = ['$64.95','$26.95','$79.95','$76'];
    var menimg = ['../img/prod/foto5men.jpg','../img/prod/foto6men.jpg','../img/prod/foto7men.jpg','../img/prod/foto8men.jpg'];
    var mendesc = ['product1','product2','product3','product4'];
    var menprice = ['$55.95','$38.95','$81.95','$45'];
    var childrenimg = ['../img/prod/foto5chi.jpg','../img/prod/foto6chi.jpg','../img/prod/foto7chi.jpg','../img/prod/foto8chi.jpg'];
    var childrendesc = ['product1','product2','product3','product4'];
    var childrenprise = ['$45.95','$28.95','$64.95','$55'];
    var collection = document.getElementsByClassName('clothes_collection-mode');
    var mas1, mas2, mas3;

    for (var i = 0; i < landdown.length; i++) {
        landdown[i].onclick = function () {
            clickme.classList.remove('is-active');
            flagmenu = false;
            if (event.target.text == " men") {
                mas1 = menimg;
                mas2 = mendesc;
                mas3 = menprice;
            }

            if (event.target.text == " women") {
                mas1 = womenimg;
                mas2 = womendesc;
                mas3 = womenprise;
            }

            if (event.target.text == " children") {
                mas1 = childrenimg;
                mas2 = childrendesc;
                mas3 = childrenprise;
            }

            for (var j = 0; j < collection.length; j++) {
                collection[j].children[0].src = mas1[j];
                collection[j].children[1].children[0].textContent = mas2[j];
                collection[j].children[1].children[1].textContent = mas3[j];

            }
        }
    }
})();

(function () {   } )();

