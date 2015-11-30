//window.onload = function () {

    var left = document.getElementById('clickjs3');
    var right = document.getElementById('clickjs4');
    
    var go = ['../img/main_slider/slide1.jpg','../img/main_slider/slide2.jpg','../img/main_slider/slide3.jpg','../img/main_slider/slide4.jpg','../img/main_slider/slide5.jpg'];
    var step = 0;



    left.onclick = moveLeft;
    right.onclick = moveRight;

    function setImg (img){
        document.getElementById('div1').style.backgroundImage = "url("+img+")"
        var list = document.getElementsByClassName('showslidepos');
        for (var i = 0; i < list.length; i++) {
            list[i].style.background = "#867a76";
        }
        list[step].style.background = "#fd926d";

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

//}
