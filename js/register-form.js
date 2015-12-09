(function () {

    var watermark, value, watermark2;
var fields = document.getElementsByClassName('regform-field');
var activateform = document.getElementsByClassName('popupform')[0];
var showme = document.getElementById('showreg');
var closeform = document.getElementsByClassName('form-close')[0];

showme.onclick = function () {
    activateform.style.display = 'block';
};
    function setmarker() {
        for ( var j = 0; j < fields.length; j++ ) {

            var setwater = fields[j];
            setwater.style.color = "grey";
            watermark = fields[j].dataset.valMark;
            value = fields[j].value;
            setwater.value = watermark;

            fields[j].onfocus = function () {
                watermark = this.dataset.valMark;
                value = this.value;
                if (this.value == watermark || watermark2 != "") {
                    this.value = "";
                    this.style.color = "black";
                    this.style.fontStyle = "normal";
                }
            };

            fields[j].onblur = function () {
                watermark = this.dataset.valMark;
                value = this.value;
                if (this.value == "") {
                    this.value = watermark;
                    this.style.color = "grey";

                }
            }

        }
    }

    setmarker();
    myregisterform.fname.onchange = nameOnChange;
    myregisterform.surname.onchange = surnameOnChange;
    myregisterform.phone.onchange = phoneOnchange;
    myregisterform.email.onchange = mailOnchange;
    myregisterform.zip.onchange = zipOnChange;
    myregisterform.onsubmit = onsubmitHandler;

    function validate(elem, pattern) {
        if (elem.value == 'Name' || elem.value == 'Surname') {
            elem.dataset.valFlag = "invalid";
        }
        else {
            var res = elem.value.search(pattern);
            if (res == -1) elem.dataset.valFlag = "invalid";
            else elem.dataset.valFlag = "valid";
        }
    }

    function nameOnChange() {
        var pattern = /[a-zA-Zа-яА-Я]+/g;
        validate(this, pattern);
    }

    function surnameOnChange() {
        var pattern = /[a-zA-Zа-яА-Я]+/g;
        validate(this, pattern);
    }

    function mailOnchange() {
        var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        validate(this, pattern);
    }

    function phoneOnchange() {
        var pattern = /\d{7}/;
        validate(this, pattern);
    }

    function zipOnChange() {
        var pattern = /\d{5}/;
        validate(this, pattern);
    }

    function onsubmitHandler() {

        var flag = false;

        for (var i = 0; i < myregisterform.elements.length; ++i) {
            var e = myregisterform.elements[i];
            if (e.type == "text" && e.onchange) {
                e.onchange();
                if (e.dataset.valFlag == "invalid") {
                    e.value = e.dataset.valError;
                    watermark2 = e.dataset.valError;
                    e.style.color = "red";
                    flag = true;
                }
            }
        }
        if (flag) {
            return false;
        }
            else
            {
                activateform.style.display = 'none';
            }

        }
    closeform.onclick = function (event) {
        activateform.style.display = 'none';
        event.stopPropagation();
    }

})();

(function () {   } )();
