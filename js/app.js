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

    // Topics dropdown
    const firstTopicColor = $(".topic").css("background-color");
    $('.topic').children().children().children().click(function() {
        console.log($('.topic').css("background"));
        $('.topic').css("background", 'linear-gradient(180deg, ' + firstTopicColor + ' 0%' + ', ' + $(this).css("background-color") + ' 100px, ' + $(this).css("background-color") + ' 70%, #F5F5EC 100%');
        $('.separation_bar').css('background-image', 'linear-gradient(180deg,' + $('.topic').css("background-color") + '0%, #F5F5EC 100%)');
    });
    // -----------------------------------
    
    // FAQs dropdown
    $('.question').click(function() {
        $(this).find('.arrow_container').children().toggleClass('active_question');
        $(this).find('.question_answer').slideToggle(250);

        $('.dropdown_arrow').not($(this).find('.arrow_container').children()).removeClass('active_question');
        $('.question_answer').not($(this).find('.question_answer')).slideUp(150);
    });
    // -----------------------------------

    // Assistant appearance
    setTimeout(() => {
        setTimeout(() => {
            
        }, );
        $('#assistant').show();
        $('#assistant').animate({'opacity': 1}, 300);
    }, 2000);
    // -----------------------------------
});