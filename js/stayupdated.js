(function () {
    var input = document.forms[0].mail;
    var watermark = "Your email adress";
    var per = document.getElementById('error');

    input.value = watermark;
    input.onfocus = function () {
        if (input.value == watermark)
        {
            input.value = "";
            input.style.color = "black";
            input.style.fontStyle = "normal";
        }
    }

    input.onblur = function () {
        if (input.value == "")
        {
            input.value = watermark;
            input.style.color = "grey";
            input.style.fontStyle = "italic";
            per.style.display = 'none'
        }
    }


    stayup.mail.onchange = emailOnChange;
    stayup.onsubmit = onsubmiHandler;

    function validate(elem, pattern) {
        var res = elem.value.search(pattern);
        if (res == -1) elem.className = "invalid"; // установка CSS класса
        else elem.className = "valid";
    }


    function emailOnChange() {
        var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        validate(this, pattern);
    }

    function onsubmiHandler() {

        var flag = false;

        input.onchange();
        if (input.className == "invalid") flag = true;

        if (flag) {
            per.innerHTML = "use correct email";
            per.style.display = 'inline';
            return false;
        }
    }




})();

(function () {   } )()
