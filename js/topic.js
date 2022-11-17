// Topics dropdown
const firstTopicColor = $(".topic").css("background-color");
const firstTopicColorBackground = $(".topic").css("background");
var lastTopicColor;
$('.topic').children().children().children().children().click(function () {
    $('.topic_container').css({'box-shadow': '0px 1px 11px 2px rgba(0, 0, 0, 0.25)', 'background-color': 'rgba(255, 255, 255, 0.7)'});
    if (lastTopicColor !== undefined) {
        $('.topic').css("background", 'linear-gradient(180deg, ' + firstTopicColor + ' 0%' + ', ' + $(this).css("background-color") + ' 200px, ' + $(this).css("background-color") + ' 70%, #F5F5EC 100%');
        if ($('.topic').css("background") === lastTopicColor) {
            $('.topic').css("background", firstTopicColorBackground);
            $('.separation_bar').css('background-image', "linear-gradient(180deg, #F7FFEE 0%, #F5F4EC 100%)");
            lastTopicColor = $('.topic').css("background");
        } else {
            $('.topic').css("background", 'linear-gradient(180deg, ' + firstTopicColor + ' 0%' + ', ' + $(this).css("background-color") + ' 200px, ' + $(this).css("background-color") + ' 70%, #F5F5EC 100%');
            lastTopicColor = $('.topic').css("background");
            $('.separation_bar').css('background-image', 'linear-gradient(180deg,' + $('.topic').css("background-color") + '0%, #F5F5EC 100%)');
        }
    } else {
        $('.topic').css("background", 'linear-gradient(180deg, ' + firstTopicColor + ' 0%' + ', ' + $(this).css("background-color") + ' 200px, ' + $(this).css("background-color") + ' 70%, #F5F5EC 100%');
        lastTopicColor = $('.topic').css("background");
        $('.separation_bar').css('background-image', 'linear-gradient(180deg,' + $('.topic').css("background-color") + '0%, #F5F5EC 100%)');
    }
});
// -----------------------------------