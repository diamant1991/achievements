 $( document ).ready(function() {
        $( window ).resize(function() {
        wnd_resize()
      
    });
    wnd_resize()

    $('.slider-tovar-show').click(function(){
        $('#text-slider .carousel-inner > .visible-item').slideToggle(400);
         $(this).text( $(this).text() == 'Свернуть все товары' ? "Показать все товары" : "Свернуть все товары");
    })

    $('.gallery-show').click(function(){
        $('.gallery').find('.hidden-xs').slideToggle(400);
        $(this).text( $(this).text() == 'Свернуть все' ? "Показать все" : "Свернуть все");
    })



});
function wnd_resize(){
        if($(window).width()<976){
            $('.navigation').addClass('collapse');
        }
        else{
            $('.navigation').removeClass('collapse');
        }
    }
