$(function () {
    //var clothes = $('.clothes_collection-model');
    //var temp, temp1;

    $(".button-slider_right").click(function(){
        $('.clothes_collection-model').animate({left: '-=250px'},500);
        $('.content-clothes_collection>.clothes_collection-model:eq(0)').detach().appendTo('.content-clothes_collection');
        $('.content-clothes_collection>.clothes_collection-model:eq(7)').animate({left: '+=2000px'},1);
        //for (var i = 0; i < clothes.length; i++) {
        //    temp = clothes.eq(i).html();
        //    temp1 = clothes.eq(i+1).html();
        //    clothes.eq(i).html(temp1);
        //    clothes.eq(i+1).html(temp);
        //}
    });

    $(".button-slider_left").click(function(){

        $('.clothes_collection-model').animate({left: '+=250px'},500);
        $('.content-clothes_collection>.clothes_collection-model:eq(7)').detach().prependTo('.content-clothes_collection');
        $('.content-clothes_collection>.clothes_collection-model:eq(0)').animate({left: '-=2000px'},1);
    });
    var designersImg = ['../img/prod/foto5.jpg','../img/prod/foto6.jpg','../img/prod/foto7.jpg','../img/prod/foto8.jpg','../img/prod/foto5.jpg','../img/prod/foto6.jpg','../img/prod/foto7.jpg','../img/prod/foto8.jpg'];
    var designersDesc = ['NADIA DRESS','SOFI BLOUSE','SOFI BLOUSE','MIMOSA LACE DRESS','NADIA DRESS','SOFI BLOUSE','SOFI BLOUSE','MIMOSA LACE DRESS'];
    var designersPrise = ['$64.95','$26.95','$79.95','$76','$64.95','$26.95','$79.95','$76'];
    var hotImg = ['../img/prod/foto1.jpg','../img/prod/foto2.jpg','../img/prod/foto1.jpg','../img/prod/foto2.jpg','../img/prod/foto3.jpg','../img/prod/foto4.jpg','../img/prod/foto3.jpg','../img/prod/foto4.jpg'];
    var hotDesc = ['MIMOSA LACE DRESS','FEEL TANK','MIMOSA LACE DRESS','FEEL TANK','HOT SHORTS','PETROL SWEATER','HOT SHORTS','PETROL SWEATER'];
    var hotPrise = ['$76.95','$59.95','$76.95','$59.95','$35.95','$21.50','$35.95','$21.50'];
    $('.label-clothes_collection').click(function(){
        var clothes = $('.clothes_collection-model');
        if ($(this).attr('id')=='designer-lable'){
            for (var i = 0; i<clothes.length; i++) {

                $('.clothes_collection-model:eq('+i+')>img').attr('src', designersImg[i]);
                $('.clothes_collection-model:eq('+i+')>div>.collection_descr-name').text(designersDesc[i]);
                $('.clothes_collection-model:eq('+i+')>div>.collection_descr-coast').text(designersPrise[i]);

            }
        }

        if ($(this).attr('id')=='whats_hot-lable'){
            for (i = 0; i<clothes.length; i++) {

                $('.clothes_collection-model:eq('+i+')>img').attr('src', hotImg[i]);
                $('.clothes_collection-model:eq('+i+')>div>.collection_descr-name').text(hotDesc[i]);
                $('.clothes_collection-model:eq('+i+')>div>.collection_descr-coast').text(hotPrise[i]);

            }
        }


    });


});


