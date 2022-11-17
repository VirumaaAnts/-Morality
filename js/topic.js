var topics = [];

// Data response
async function getJsonTopics (topicsRes) {
    topics = await topicsRes;
    initTopics();
}

function initTopics() {
    const firstTopicColor = $(".topic").css("background-color");
    const firstTopicColorBackground = $(".topic").css("background");
    var lastTopicColor;
    $('.topic').children().children().children().children().click(function () {

        // Comparing topic category with json data
        const thisTopic = $(this).text().trim();
        var currentTopic = null;
        topics.forEach(topic => {
            if(thisTopic == topic.category) {
                currentTopic = topic;
            }
        });
        if(((currentTopic.info.captions).length) != 0) {
            const topicName = `<h3 class="topic_name">${currentTopic.category}</h3>`;
            let topicDescription = '';
            for (let i = 0; i < (currentTopic.info.captions).length; i++) {
                topicDescription += `
                    <div class="description_block">
                        <h4 class="topic_caption">${(currentTopic.info.captions)[i]}</h4>
                        <p>${(currentTopic.info.descriptions)[i]}</p>
                    </div>`;
            }
            const topicContainer = document.createElement('div');
            topicContainer.classList.add('topic_description');
            topicContainer.innerHTML = topicName;
            topicContainer.innerHTML += topicDescription;
            $('.topic_solution').hide();
            $('.topic_solution').html(topicContainer);
            $('.topic_solution').addClass('no-before');
            $('.topic_solution').slideToggle();
            $('.topic_name').addClass('after');
        } else {
            $('.topic_solution').text(`After choosing you will be sent to our main block of web-sites where you can read about your topic and it’s solution.`);
            $('.topic_solution').removeClass('no-before');
        }
        
        // Setting the colors on topic bg color
        $('.topic_container').css({'box-shadow': '0px 1px 11px 2px rgba(0, 0, 0, 0.25)', 'background-color': 'rgba(255, 255, 255, 0.7)'});
        if (lastTopicColor !== undefined) {
            $('.topic').css("background", 'linear-gradient(180deg, ' + firstTopicColor + ' 0%' + ', ' + $(this).css("background-color") + ' 200px, ' + $(this).css("background-color") + ' 70%, #F5F5EC 100%');
            if ($('.topic').css("background") === lastTopicColor) {
                $('.topic').css("background", firstTopicColorBackground);
                $('.separation_bar').css('background-image', "linear-gradient(180deg, #F7FFEE 0%, #F5F4EC 100%)");
                lastTopicColor = $('.topic').css("background");
                
                $('.topic_container').css({'box-shadow': '0px 1px 11px 2px rgba(0, 0, 0, 0)', 'background-color': 'rgba(255, 255, 255, 0)'});
                $('.topic_solution').text(`After choosing you will be sent to our main block of web-sites where you can read about your topic and it’s solution.`);
                $('.topic_solution').removeClass('no-before');
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
}