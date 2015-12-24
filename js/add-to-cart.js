(function () {

    var addpos = document.getElementsByClassName('collection_descr-coast');
    var count = 0;
    var price = 0;
    var price1, name1;
    var priceMas = [];
    var nameMas = [];
    var savedCount = window.localStorage.count;
    var savedPrice = window.localStorage.price;
    var setitems = document.getElementsByClassName('customer_check-quantity')[0];
    var setprice = document.getElementsByClassName('customer_check-summ')[0];
    //var spanX = $( ".place_order>p>span" );
    if (savedCount) {
        count = savedCount;
        price = savedPrice;
        if (savedCount == 1) {
            setitems.innerHTML = savedCount + ' item';
        }
        else {setitems.innerHTML = savedCount + ' items';}
        setprice.innerHTML = '$ ' + savedPrice;

        for (var j = 1; j<=count; j++) {
            price1 = 'price' + j;
            var tempPrice = window.localStorage[price1];
            priceMas.push(tempPrice);
        }

        for (var k = 1; k<=count; k++) {
            name1 = 'name' + k;
            var tempName = window.localStorage[name1];
            nameMas.push(tempName);
        }

        for (var l = 0; l<priceMas.length; l++) {
            $('.place_order').append('<p><span> X</span></p>');
            $('.place_order>p:last-child').prepend(nameMas[l] + ' ' + priceMas[l]);
        }
        $( ".place_order>p>span" ).click(removePosition);
    }

    for (var i = 0; i<addpos.length; i++) {

        addpos[i].nextSibling.onclick = function () {
            count++;
            if (count == 1) {setitems.innerHTML = count + ' item';}
                else {setitems.innerHTML = count + ' items'}
            window.localStorage.count = count;
            var position = event.target;
            var elemprice = position.previousSibling.textContent;
            var elemName = position.previousSibling.previousElementSibling.textContent;
            var subprice = elemprice.substring(1, elemprice.length);
            parseFloat(subprice);
            parseFloat(price);
            price = +subprice + +price;
            var pos1 = price.toString().indexOf('.');
            price = price.toString().substring(0, pos1+3);
            //price.toFixed(2);
            setprice.innerHTML = '$ ' + price;
            window.localStorage.price = price;
            price1 = 'price' + count;
            name1 = 'name' + count;
            window.localStorage[price1] = elemprice;
            window.localStorage[name1] = elemName;
            $('.place_order').append('<p><span> X</span></p>');
            //$('.place_order').append('<p></p>');
            $('.place_order>p:last-child').prepend(elemName + " " + elemprice);
            $( ".place_order>p>span" ).click(removePosition);
        }
    }



    $( ".customer_check" ).click(function() {
        $( ".place_order" ).toggle( "slow", function(){
        });
    });

    $( ".place_order>p:eq(0)" ).click(function() {
        $( ".place_order" ).toggle( "slow", function(){
        });
    });
    function removePosition (){

        $(this).parent().remove();
        count--;
        if (count == 1) {setitems.innerHTML = count + ' item';}
        else {setitems.innerHTML = count + ' items'}
        window.localStorage.count = count;
        var position = event.target;
        var elempricestr = position.parentElement.textContent;
        var pos = elempricestr.indexOf("$");
        var pos1 = elempricestr.indexOf(" X");
        var elprice = elempricestr.substring(pos, pos1);
        //var elemName = position.previousSibling.previousElementSibling.textContent;
        price = window.localStorage.price;
        var subprice = elprice.substring(1, elprice.length);
        parseFloat(subprice);
        parseFloat(price);
        price = +price - +subprice;
        var pos2 = price.toString().indexOf('.');
        price = price.toString().substring(0, pos2+3);
        //price.toFixed(2);
        setprice.innerHTML = '$ ' + price;
        window.localStorage.price = price;
        var namestr = elempricestr.substring(0, pos-1);

        for (var m =1; m<100; m++) {
            price1 = 'price' + m;
            name1 = 'name' + m;
            var namedel = window.localStorage[name1];
            var pricedel = window.localStorage[price1];
            if (pricedel==elprice && namedel==namestr) {
                localStorage.removeItem(namedel);
                localStorage.removeItem(pricedel);
                return;
            }
        }
    }

})();

(function () {   } )();
