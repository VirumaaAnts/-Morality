$(document).ready(() => {
    // Header logic
    $(window).click(e => {
        const target = e.target;
        if (!target.closest('#menu-btn') && !target.closest('.menubox') && $(".menubox").css("visibility") == "visible") { 
            $("#menu-toggle").prop('checked', false);
            $('.menubox').toggleClass('active');
        }
    });
    $(".menu-item").click(function () {
        $("#menu-toggle").prop('checked', false);
        $('.menubox').toggleClass('active');
    });
    $('.menu-btn').click(function () {
        $('.menubox').toggleClass('active');
        if($('#assistant').hasClass('active')){
            if(!$('.menubox').hasClass('active') && $(window).width() <= 400){
                $(".menu-btn").addClass('chat_active');
            }else{
                $(".menu-btn").removeClass('chat_active');
            }
        }
    });
    $('#close_menu').click(() => {
        $("#menu-toggle").prop('checked', false);
        $('.menubox').toggleClass('active');
    });
    headerChange();
    burgerChange();
    $(window).scroll(headerChange);
    $(window).resize(() => {
        headerChange();
        burgerChange();
        if ($(window).width() >= 1050 || $(window).width() < 500) {
            $('.topic_theme').removeAttr('style');
        }
    });
    function headerChange() {
        if($(window).width() >= 401) {
            $(".menu-btn").removeClass('chat_active');
        }else{
            if($('#assistant').hasClass('active')){
                $(".menu-btn").addClass('chat_active');
                if($('.menubox').hasClass('active')){
                    $(".menu-btn").removeClass('chat_active');
                }
            }
        }
        if ($(window).width() >= 601) {
            $('header').removeAttr('style');
            $('.logo').removeAttr('style');
            if ($(window).scrollTop() > 0) {
                $('header').css({
                    'background-color': '#fff',
                    'position': 'fixed',
                    'filter': 'drop-shadow(0px 6px 21px rgba(0, 0, 0, 0.15))',
                });
                $('.logo').css({ 
                    'margin-left': '12.5vw',
                    'margin-right': '10px'
                });
                $('.links').css({ 'margin-left': '50px' });
            } else {
                $('header').removeAttr('style');
                if ($(".burger-menu").css('display') != 'block') {
                    $('.links').removeAttr('style');
                }
            }
        }
        else {
            $('header').css({
                'background-color': '#fff',
                'position': 'fixed',
                'filter': 'drop-shadow(0px 6px 21px rgba(0, 0, 0, 0.15))',
            });
            $('.logo').css({ 
                'margin-left': '12.5vw',
                'margin-right': '10px'
            });
            $('.links').css({ 'margin-left': '50px' });
        }
        // $('.menubox').css({'padding-top': '125px', 'z-index': 5});
    }
    // -----------------------------------

    // Burger-Menu
    function burgerChange() {
        if ($(window).width() <= 1103) {
            $(".burger-menu").css('display', 'block');
            $(".links").css('display', 'none');
        } else {
            $(".burger-menu").css('display', 'none');
            $(".links").css('display', 'flex');
        }
    }
    // -----------------------------------

    // Topic low size screen
    $('.topic_theme').mouseover(function () {
        if ($(window).width() <= 1050 && $(window).width() > 500) {
            $('.topic_theme').removeAttr('style');
            const topicPosition = Number($(this).attr('data-position'));
            if (topicPosition % 2 == 0) {
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
            $('.topic_theme').mouseleave(function () {
                $('.topic_theme').removeAttr('style');
            });
        } else {
            $('.topic_theme').removeAttr('style');
        }
    });
    // -----------------------------------

    // FAQs dropdown
    $('.question').click(function () {
        $(this).find('.arrow_container').children().toggleClass('active_question');
        $(this).find('.question_answer').slideToggle(250);

        $('.dropdown_arrow').not($(this).find('.arrow_container').children()).removeClass('active_question');
        $('.question_answer').not($(this).find('.question_answer')).slideUp(150);
    });
    // -----------------------------------

    // Search FAQ
    $('#searchFaq').keypress(function (e) { 
        if(e.key == 'Enter') {
            searchFaq();
        }
    });
    function searchFaq() {
        const question = document.querySelectorAll('.question');
        let checkVisibility = 0;
        for (let i = 0; i < question.length; i++) {
            let thisQuestion = ((question[i].querySelector('.question_text').
                    querySelector('p').innerHTML)
                    .trim())
                    .toLowerCase();
            const userSearch = ($('#searchFaq').val()).toLowerCase();
            if(!(thisQuestion).includes(userSearch)) {
                question[i].style.display = 'none';
                checkVisibility++;
            } else {
                question[i].style.display = 'flex';
            }
        }
        if(checkVisibility == question.length) {
            $('.questions_list').css('border', 'none');
            $('#empty_faqs').show();
        } else {
            $('.questions_list').removeAttr('style');
            $('#empty_faqs').hide();
        }
    }
    // -----------------------------------

    // Assistant appearance
    $('#assistant').css({ 'display': 'block', 'animation': 'assistant_animation infinite 5s' });
    setTimeout(() => {
        $('#assistant').animate({ 'opacity': 1, 'bottom': '40px' }, 500, 'linear');
        $('#assistant').css('cursor', 'pointer');

        $('#assistant').click(() => {
            $('#assistant').toggleClass('active');
            if($(window).width() <= 400  && !$('.menubox').hasClass('active')){
                $(".menu-btn").toggleClass('chat_active');
            }
            if ($('.assistant_chat').css('display') == 'none') {
                // Open chat
                $('.assistant_chat').show();
                $('.assistant_chat').animate({ 'opacity': 1 }, 400);
                $('#message').focus();

                $('#assistant').animate({ 'bottom': '40px' }, 250, 'linear');
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
    // Game appearance
    $('#game').css({ 'display': 'flex', 'animation': 'game_animation infinite 3s' });
    setTimeout(() => {
        $('#game').animate({ 'opacity': 1, 'right': '-30px'}, 700);
        $('#game').css('cursor', 'pointer');

        $('#game').click(() => {
            // Open chat
            if ($('.user_ban').css('display') == 'none') {
                $("body").css("overflow", "hidden");
                $('.game_window').animate({'right': '50%'});
                $('.user_ban').show();

                setTimeout(() => {
                    $('#game').animate({ 'right': '50vh', 'opacity': 0 }, 400);
                }, 150);
                $('#game').children().animate({ 'transform': 'rotate(180deg)' }, 900);
            } else {
                $("body").css("overflow", "auto");
                // Close chat
                $('.game_chat').fadeOut();
                setTimeout(() => {
                    $('.game_chat').css('opacity', 0);
                }, 400);
                $('#game').css('animation', 'game_animation infinite 3s');
            }
        });
    }, 2000);
    // -----------------------------------
});
