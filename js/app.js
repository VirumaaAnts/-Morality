$(document).ready(() => {
    // Header logic
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
    // -----------------------------------
    
    // FAQs dropdown
    $('.question').click(function() {
        $(this).find('.arrow_container').children().toggleClass('active_question');
        $(this).find('.question_answer').slideToggle('250', 'linear');

        $('.dropdown_arrow').not($(this).find('.arrow_container').children()).removeClass('active_question');
        $('.question_answer').not($(this).find('.question_answer')).slideUp('150', 'linear');
    });
    // -----------------------------------
});