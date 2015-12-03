(function () {

    var addpos = document.getElementsByClassName('collection_descr-coast');
    var count = 0;
    var price = 0;
    var savedCount = findCookieValue("count");
    var savedPrice = findCookieValue("price");
    var setitems = document.getElementsByClassName('customer_check-quantity')[0];
    var setprice = document.getElementsByClassName('customer_check-summ')[0];
    if (savedCount) {
        count = savedCount;
        price = savedPrice;
        if (savedCount == 1) {
            setitems.innerHTML = savedCount + ' item';
        }
        else {setitems.innerHTML = savedCount + ' items';}
        setprice.innerHTML = '$ ' + savedPrice;

    }

    for (var i = 0; i<addpos.length; i++) {

        addpos[i].nextSibling.onclick = function () {
            count++;
            if (count == 1) {setitems.innerHTML = count + ' item';}
                else {setitems.innerHTML = count + ' items'}
            document.cookie = "count=" + count + "; max-age=2000000";
            var position = event.target;
            var elemprice = position.previousSibling.textContent;
            var subprice = elemprice.substring(1, elemprice.length);
            parseFloat(subprice);
            parseFloat(price);
            price = +subprice + +price;
            var pos1 = price.toString().indexOf('.');
            price = price.toString().substring(0, pos1+3);
            //price.toFixed(2);
            setprice.innerHTML = '$ ' + price;
            document.cookie = "price=" + price + "; max-age=2000000";
        }
    }

    function findCookieValue(cookieName) {
        var allcookies = document.cookie;
        var pos = allcookies.indexOf(cookieName + "=");
        if (pos != -1) {
            var start = pos + cookieName.length + 1;
            var end = allcookies.indexOf(";", start);
            if (end == -1) end = allcookies.length;
            var value = allcookies.substring(start, end);
            value = decodeURIComponent(value);
            return value;
        }
    }

})();

(function () {   } )();
