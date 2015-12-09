(function () {

    var left = document.getElementById('clickjs3');
    var right = document.getElementById('clickjs4');
    
    var go = ['../img/main_slider/slide1.jpg','../img/main_slider/slide2.jpg','../img/main_slider/slide3.jpg','../img/main_slider/slide4.jpg','../img/main_slider/slide5.jpg'];
    var step = 0;
    var list = document.getElementsByClassName('showslidepos');


    left.onclick = moveLeft;
    right.onclick = moveRight;

    function setImg (img){
        document.getElementById('div1').style.background = "url("+img+") no-repeat";
        var list = document.getElementsByClassName('showslidepos');
        for (var i = 0; i < list.length; i++) {
            if (list[i].style.background != "rgb(253, 146, 110)"){
            list[i].style.background = "#867a76";
            }
            list[i].onmouseover = function (){
                event.target.style.background = "#fd926e";
            };
            list[i].onmouseout = function (){
                event.target.style.background = "#867a76";
            }
        }
        list[step].style.background = "#fd926d";

    }

    for (var j = 0; j<list.length; j++) {
        list[j].onclick = setimgNow;
        function setimgNow () {
            clearInterval(myInter);
            //var entstep = event.target.id;
            step = event.target.id;
            setImg(go[step]);
            myInter =  setInterval(moveRightAuto, 2000);

        }
    }

    function moveLeft (){
        clearInterval(myInter);
        step--;
        if (step<0){step=go.length-1;}
        setImg(go[step]);
        myInter =  setInterval(moveRightAuto, 2000);


    }

    function moveRight (){
        clearInterval(myInter);
        step++;
        if (step==go.length){step=0;}
        setImg(go[step]);
        myInter =  setInterval(moveRightAuto, 2000);


    }



    var myInter =  setInterval(moveRightAuto, 2000);

    function moveRightAuto (){
        step++;
        if (step==go.length){step=0;}
        setImg(go[step]);

    }

})();

(function () {   } )();
