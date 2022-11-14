$(document).ready(() => {
    headerChange();
    $(window).scroll(headerChange);
    function headerChange() {
        if($(window).scrollTop() > 0) {
            $('header').css({
                'background-color': '#fff', 
                'position': 'fixed', 
                'filter': 'drop-shadow(0px 6px 21px rgba(0, 0, 0, 0.15))',
            });
            $('.logo').css({'margin-left': '12.5vw'});
            $('.links').css({'margin-left': '50px'});
        } else {
            $('header').removeAttr('style');
            $('.logo').removeAttr('style');
            $('.links').removeAttr('style');
        }
    }
});