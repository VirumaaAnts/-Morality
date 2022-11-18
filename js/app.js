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

    // Topic low size screen
    $(window).resize(function() {
        if($(window).width() >= 1050 || $(window).width() < 500) {
            $('.topic_theme').removeAttr('style');
        }
    });
    $('.topic_theme').mouseover(function() {
        if($(window).width() <= 1050 && $(window).width() > 500) {
            $('.topic_theme').removeAttr('style');
            const topicPosition = Number($(this).attr('data-position'));
            if(topicPosition % 2 == 0) {
                // Even number
                const prevTopic = $('.blocks_topic').find(`[data-position=${topicPosition - 1}]`);
                $(this).css('width', 'calc(40% + 18%)');
                prevTopic.css('width', 'calc(50% - 18%)');
            } else {
                // Odd number
                const nextTopic = $('.blocks_topic').find(`[data-position=${topicPosition + 1}]`);
                $(this).css('width', 'calc(40% + 18%)');
                nextTopic.css('width', 'calc(50% - 18%)');
            }
            $('.topic_theme').mouseleave(function() {
                $('.topic_theme').removeAttr('style');
            });
        } else {
            $('.topic_theme').removeAttr('style');
        }
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
    $('#assistant').css({'display': 'block', 'animation': 'assistant_animation infinite 5s'});
    setTimeout(() => {
        $('#assistant').animate({'opacity': 1, 'bottom': '40px'}, 500, 'linear');
        $('#assistant').css('cursor', 'pointer');

        $('#assistant').click(() => {
            
            if($('.assistant_chat').css('display') == 'none') {
                // Open chat
                $('.assistant_chat').show();
                $('.assistant_chat').animate({'opacity': 1}, 400);
                $('#message').focus();

                $('#assistant').animate({'bottom': '40px'}, 250, 'linear');
                const assist_styles = $('#assistant').prop('style');
                assist_styles.removeProperty('animation');
            } else {
                // Close chat
                $('.assistant_chat').fadeOut();
                setTimeout(() => {
                    $('.assistant_chat').css('opacity', 0);
                }, 400);
                $('#assistant').css('animation', 'assistant_animation infinite 5s');
            }
        });
    }, 2000);
    // -----------------------------------
});
