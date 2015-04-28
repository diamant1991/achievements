 $( document ).ready(function() {
        $( window ).resize(function() {
        wnd_resize()
      
    });
    wnd_resize()

});
function wnd_resize(){
        if($(window).width()<976){
            $('.navigation').addClass('collapse');
        }
        else{
            $('.navigation').removeClass('collapse');
        }
    }
