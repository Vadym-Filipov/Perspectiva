$(function () {
    var clothes = $('.clothes_collection-model');
    var temp, temp1;

    $(".button-slider_right").click(function(){
        for (var i = 0; i < clothes.length; i++) {
            temp = clothes.eq(i).html();
            temp1 = clothes.eq(i+1).html();
            clothes.eq(i).html(temp1);
            clothes.eq(i+1).html(temp);
        }
    });

    $(".button-slider_left").click(function(){

        //$('.clothes_collection-model').animate({left: '+=235px'},500);
        $('.content-clothes_collection>.clothes_collection-model:eq(5)').detach().prependTo('.content-clothes_collection');

    });
});
