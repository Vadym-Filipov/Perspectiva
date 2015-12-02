(function () {

    var addpos = document.getElementsByClassName('collection_descr-coast');
    for (var i = 0; i<addpos.length; i++) {

        addpos[i].nextSibling.onclick = function () {
            var position = event.target;
            var price = position.previousSibling.textContent;
        }
    }

})();

(function () {   } )()
