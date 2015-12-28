(function () {

    var addpos = document.getElementsByClassName('collection_descr-coast');
    var msg = document.getElementsByClassName('thnx')[0];
    var count = 0;
    var maxCount = -1;
    var price = 0;
    var price1, name1;
    var priceMas = [];
    var nameMas = [];
    var savedCount = window.localStorage.count;
    var savedMaxCount = window.localStorage.maxCount;
    var savedPrice = window.localStorage.price;
    var setitems = document.getElementsByClassName('customer_check-quantity')[0];
    var setprice = document.getElementsByClassName('customer_check-summ')[0];
    //var spanX = $( ".place_order>p>span" );
    if (savedCount) {
        count = savedCount;
        price = savedPrice;
        maxCount = savedMaxCount
        if (savedCount == 1) {
            setitems.innerHTML = savedCount + ' item';
        }
        else {setitems.innerHTML = savedCount + ' items';}
        setprice.innerHTML = '$ ' + savedPrice;

        for (var j = 1; j<=maxCount; j++) {
            price1 = 'price' + j;
            var tempPrice = window.localStorage[price1];
            priceMas.push(tempPrice);
        }

        for (var k = 1; k<=maxCount; k++) {
            name1 = 'name' + k;
            var tempName = window.localStorage[name1];
            nameMas.push(tempName);
        }

        for (var l = 0; l<maxCount; l++) {
            if (nameMas[l] == undefined){continue;}
            $('.place_order').append('<p class="order_position"><span class="remove_order-position"> X</span></p>');
            $('.place_order>p:last-child').prepend(nameMas[l] + ' ' + priceMas[l]);
        }
        $( ".place_order>p>span" ).click(removePosition);
    }

    for (var i = 0; i<addpos.length; i++) {

        addpos[i].nextSibling.onclick = function () {
            count++;
            if (count > maxCount){maxCount=count;window.localStorage.maxCount = maxCount;}
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
            $('.place_order').append('<p class="order_position"><span class="remove_order-position"> X</span></p>');
            //$('.place_order').append('<p></p>');
            $('.place_order>p:last-child').prepend(elemName + " " + elemprice).find("span").click(removePosition);
            //$( ".place_order>p>span:last-child" ).click(removePosition);
        }
    }

   // $( ".place_order>p>span" ).click(removePosition);

    $( ".customer_check" ).click(function() {
        $( ".place_order" ).toggle( "slow", function(){
        });
    });

    $( ".place_button" ).click(function() {
        $( ".place_order" ).toggle( "slow", function(){
        });
        //Data = JSON.stringify({
        //    'key': 'aWUYcbDZlFfZ0r_-D-X20A', // Get from mandrillapp.com
        //    'message': {
        //        'from_email': 'melkore87@gmail.com',
        //        'to': [{ 'email': "melkore87@gmail.com", 'type': 'to' }],
        //        'autotext': 'true',
        //        'subject': 'New order',
        //        'html': '<table style=""><tr><td>input1</td></tr></table>'
        //    }
        //});
        //
        //$.ajax({
        //    type: "POST",
        //    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        //    data: Data
        //});

        window.localStorage.clear();
        //location.reload(true)
        msg.style.display = 'block';
        $('.thnx>span').click(function() {
            location.reload(true);
            //msg.style.display = 'none';
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
        //price = window.localStorage.price;
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

        for (var m =1; m<maxCount; m++) {
            price1 = 'price' + m;
            name1 = 'name' + m;
            var namedel = window.localStorage[name1];
            var pricedel = window.localStorage[price1];
            if (pricedel==elprice && namedel==namestr) {
                localStorage.removeItem('name' + m);
                localStorage.removeItem('price' + m);
                break;
            }
        }
    }

})();

(function () {   } )();
